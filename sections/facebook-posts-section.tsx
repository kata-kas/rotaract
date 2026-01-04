import SectionTitle from '@/components/section-title';
import FacebookPostsParallax from '@/components/facebook-posts-parallax';
import { IFacebookPostCard } from '@/types';
import { FacebookIcon } from 'lucide-react';
import AnimatedContent from '@/components/animated-content';

async function getPosts(): Promise<{ posts?: IFacebookPostCard[]; error?: string }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/facebook-posts`, {
            next: { revalidate: 3600 }
        });

        if (!response.ok) {
            return { error: 'Failed to fetch posts' };
        }

        const data = await response.json();

        if (data.success && data.posts) {
            return { posts: data.posts };
        }

        return { error: data.error || 'Failed to load posts' };
    } catch (err) {
        console.error('Error fetching posts:', err);
        return { error: 'Network error' };
    }
}

export default async function FacebookPostsSection() {
    const { posts, error } = await getPosts();

    if (error || !posts) {
        return (
            <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-20 border-b border-border">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-text-muted">Unable to load Facebook posts. Please visit our{' '}
                        <a
                            href="https://www.facebook.com/RotaractCetateArad"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand hover:underline"
                        >
                            Facebook page
                        </a>
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="px-4 md:px-16 lg:px-24 xl:px-32 border-b border-border">
            <div className="p-4 pt-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-border">
                <SectionTitle
                    icon={FacebookIcon}
                    title="Ultimele noastre activități"
                    subtitle="Urmărește-ne pe Facebook pentru a vedea cum contribuim la comunitate prin acțiune și leadership tânăr."
                />

                <AnimatedContent className="mt-12 w-full">
                    <FacebookPostsParallax posts={posts} />
                </AnimatedContent>

                <AnimatedContent className="mt-12 mb-8">
                    <a
                        href="https://www.facebook.com/RotaractCetateArad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-2.5 rounded-full bg-bg-muted border border-primary-200 text-brand hover:bg-brand-light transition-colors"
                    >
                        <FacebookIcon className="size-4" />
                        <span>Vezi mai multe pe Facebook</span>
                    </a>
                </AnimatedContent>
            </div>
        </section>
    );
}
