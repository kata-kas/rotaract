"use client";
import {usePathname} from "next/navigation";
import Link from "next/link";

export default function NavItem({href, label}: { href: string, label: string }) {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link href={href} className={`text-sm font-medium text-muted-foreground transition-colors hover:text-primary ${
            isActive ? "text-primary" : ""
        }`}>
            {label}
        </Link>
    );
}
