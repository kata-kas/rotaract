'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import FacebookPostCard from '@/components/facebook-post-card';
import { IFacebookPostCard } from '@/types';

type ColumnProps = {
    posts: IFacebookPostCard[];
    y: MotionValue<number>;
};

const Column = ({ posts, y }: ColumnProps) => {
    return (
        <motion.div
            className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
            style={{ y }}
        >
            {posts.map((post) => (
                <div key={post.id} className="relative h-full w-full">
                    <FacebookPostCard post={post} />
                </div>
            ))}
        </motion.div>
    );
};

interface FacebookPostsParallaxProps {
    posts: IFacebookPostCard[];
}

export default function FacebookPostsParallax({ posts }: FacebookPostsParallaxProps) {
    const [dimension, setDimension] = useState({ width: 0, height: 0 });
    const galleryRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: galleryRef,
        offset: ['start end', 'end start']
    });

    const { height } = dimension;
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

    useEffect(() => {
        const resize = () => {
            setDimension({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', resize);
        resize();

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    const distributePostsToColumns = (allPosts: IFacebookPostCard[]) => {
        const columns: IFacebookPostCard[][] = [[], [], [], []];
        allPosts.forEach((post, index) => {
            columns[index % 4].push(post);
        });
        return columns;
    };

    const columns = distributePostsToColumns(posts);

    return (
        <div
            ref={galleryRef}
            className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden bg-bg p-[2vw]"
        >
            <Column posts={columns[0]} y={y} />
            <Column posts={columns[1]} y={y2} />
            <Column posts={columns[2]} y={y3} />
            <Column posts={columns[3]} y={y4} />
        </div>
    );
}
