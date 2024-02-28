import Link from "next/link"
import { cn } from "@/lib/utils"
import { ModeToggle } from '@/components/mode-toggle';
import { Logo } from '@/components/logo';
import { Logout } from '@/components/logout';
import { auth } from '@/auth';

export async function MainNav({
                          className,
                          ...props
                        }: React.HTMLAttributes<HTMLElement>) {
  const session = await auth()
  return (
    <div className="grid grid-cols-3 px-4">
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        <Logo />
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
          href="/members"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Members
        </Link>
      </nav>
      <div className="flex items-center justify-end gap-2">
        {
          session?.user && <Logout />
        }
        <ModeToggle />
      </div>
    </div>
  )
}
