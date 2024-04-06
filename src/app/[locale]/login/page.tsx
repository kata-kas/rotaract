"use client";
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { authenticate } from '@/lib/actions';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { FormEvent } from 'react';

export default function LoginPage() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const {pending} = useFormStatus();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      const formData = new FormData(event.currentTarget)
      dispatch(formData)
    } catch (error) {
      // Handle error if necessary
      console.error(error)
    }
  }

  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Log In</CardTitle>
            <CardDescription>
              Only for members
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4" onSubmit={onSubmit}>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input name="email" id="email" type="email" placeholder="m@example.com" autoComplete="username" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input name="password" id="password" type="password" autoComplete="current-password" />
              </div>
              <Button type="submit" className="w-full" aria-disabled={pending}>Enter account</Button>
            </form>
          </CardContent>
          <CardFooter>
            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              {errorMessage && (
                <>
                  <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />
                  <p className="text-sm text-red-500">{errorMessage}</p>
                </>
              )}
            </div>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
