import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/components/theme-provider';
import { MainNav } from '@/components/main-nav';
import Loading from '@/app/loading';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
      >
        <div className="hidden flex-col md:flex">
          <div className="border-b">
            <MainNav className="mx-6" />
          </div>
        </div>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
          <Analytics />
      </ThemeProvider>
      </body>
    </html>
  );
}
