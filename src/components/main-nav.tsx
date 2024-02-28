import Link from "next/link"

import { cn } from "@/lib/utils"
import Image from 'next/image';
import { ModeToggle } from '@/components/mode-toggle';

export function MainNav({
                          className,
                          ...props
                        }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className="grid grid-cols-3 px-4">
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        <Image src="/logo.svg" alt="Rotaract Arad Cetate Logo" className="h-12 w-auto m-4" width={200} height={760} />
      </Link>
      <nav
        className={cn("flex items-center justify-center space-x-4 lg:space-x-6", className)}
        {...props}
      >
        <Link
          href="/about"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Projects
        </Link>
        <Link
          href="/news"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          News
        </Link>
        <Link
          href="/dashboard"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Dashboard
        </Link>
      </nav>
      <div className="flex items-center justify-end">
        <ModeToggle />
      </div>
    </div>
  )
}
