import { NextResponse } from 'next/server';
import { IFacebookAPIResponse, IFacebookPostCard } from '@/types';

const FACEBOOK_API_VERSION = 'v18.0';
const POST_LIMIT = 20; // Fetch enough for 4 columns

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
    try {
        const pageId = process.env.FACEBOOK_PAGE_ID;
        const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;

        if (!pageId || !accessToken) {
            return NextResponse.json(
                { error: 'Missing Facebook credentials' },
                { status: 500 }
            );
        }

        const url = new URL(
            `https://graph.facebook.com/${FACEBOOK_API_VERSION}/${pageId}/posts`
        );

        url.searchParams.append('fields', 'id,message,created_time,full_picture,attachments{media,type,url}');
        url.searchParams.append('limit', POST_LIMIT.toString());
        url.searchParams.append('access_token', accessToken);

        const response = await fetch(url.toString(), {
            next: { revalidate: 3600 }
        });

        if (!response.ok) {
            throw new Error(`Facebook API error: ${response.statusText}`);
        }

        const data: IFacebookAPIResponse = await response.json();

        // Transform and filter posts with images
        const posts: IFacebookPostCard[] = data.data
            .filter(post => post.full_picture || post.attachments?.data?.[0]?.media?.image?.src)
            .map(post => ({
                id: post.id,
                image: post.full_picture || post.attachments?.data?.[0]?.media?.image?.src || '',
                message: post.message?.substring(0, 150) || 'View post',
                date: new Date(post.created_time).toLocaleDateString('ro-RO', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }),
                link: `https://www.facebook.com/${post.id}`
            }));

        return NextResponse.json({ posts, success: true });
    } catch (error) {
        console.error('Facebook API Error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch Facebook posts', posts: [] },
            { status: 500 }
        );
    }
}
