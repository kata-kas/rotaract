import { signOut } from '@/auth';
import { ExitIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';

export function Logout() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <Button variant="outline" size="icon">
        <ExitIcon className="w-6" />
      </Button>
    </form>
  )
}
