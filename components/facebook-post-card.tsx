'use client';

import { IFacebookPostCard } from "@/types";
import { CalendarIcon, ExternalLinkIcon } from "lucide-react";
import Image from "next/image";

interface FacebookPostCardProps {
    post: IFacebookPostCard;
}

export default function FacebookPostCard({ post }: FacebookPostCardProps) {
    return (
        <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full bg-bg rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border-light"
        >
            <div className="relative h-[70%] overflow-hidden">
                <Image
                    src={post.image}
                    alt={post.message}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 right-3 p-2 bg-bg/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLinkIcon className="size-4 text-brand" />
                </div>
            </div>
            <div className="p-4 h-[30%] flex flex-col justify-between">
                <p className="text-sm text-text-light line-clamp-2 mb-2">
                    {post.message}
                </p>
                <div className="flex items-center gap-2 text-xs text-text-muted">
                    <CalendarIcon className="size-3.5" />
                    <span>{post.date}</span>
                </div>
            </div>
        </a>
    );
}
