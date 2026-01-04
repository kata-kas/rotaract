import { IFacebookPostCard } from '@/types';

export async function getFacebookPosts(): Promise<{ posts?: IFacebookPostCard[]; error?: string }> {
    const pageId = process.env.FACEBOOK_PAGE_ID;
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;

    if (!pageId || !accessToken) {
        console.error('Missing Facebook credentials');
        return { error: 'Missing Facebook credentials' };
    }

    try {
        const url = `https://graph.facebook.com/v18.0/${pageId}/posts?fields=id,message,created_time,full_picture,permalink_url&limit=12&access_token=${accessToken}`;

        const response = await fetch(url, {
            next: { revalidate: 3600 }
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Facebook API Error:', {
                status: response.status,
                statusText: response.statusText,
                error: data.error
            });
            return { error: `Facebook API error: ${data.error?.message || response.statusText}` };
        }

        if (!data.data || data.data.length === 0) {
            return { error: 'No posts found' };
        }

        const posts: IFacebookPostCard[] = data.data
            .filter((post: any) => post.full_picture && post.message)
            .map((post: any) => {
                const date = new Date(post.created_time);
                const formattedDate = date.toLocaleDateString('ro-RO', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                });

                return {
                    id: post.id,
                    image: post.full_picture,
                    message: post.message.substring(0, 150),
                    date: formattedDate,
                    link: post.permalink_url,
                };
            });

        return { posts };
    } catch (error) {
        console.error('Error fetching posts:', error);
        return { error: 'Network error' };
    }
}
