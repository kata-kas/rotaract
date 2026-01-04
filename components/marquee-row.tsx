'use client';

import Image from 'next/image';

interface MarqueeRowProps {
    images: string[];
    height: string;
    speed?: number;
    reverse?: boolean;
}

export default function MarqueeRow({
    images,
    height,
    speed = 25,
    reverse = false
}: MarqueeRowProps) {
    return (
        <div className={`marquee-row w-full overflow-hidden relative ${height}`}>
            <div
                className="flex transform-gpu min-w-[200%] gap-4"
                style={{
                    animation: `marqueeScroll ${speed}s linear infinite`,
                    animationDirection: reverse ? 'reverse' : 'normal'
                }}
            >
                {[...images, ...images].map((src, index) => (
                    <div
                        key={index}
                        className={`relative ${height} aspect-[4/3] shrink-0`}
                    >
                        <Image
                            src={src}
                            alt={`Rotaract event ${index + 1}`}
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 768px) 50vw, 25vw"
                            unoptimized
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
