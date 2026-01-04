import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import LenisScroll from "@/components/lenis";
import Footer from "@/components/footer";
import React from "react";

const inter = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
});

const urbanist = Urbanist({
    variable: "--font-urbanist",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Rotaract Arad Cetate",
        template: "%s | Rotaract Arad Cetate",
    },
    description:
        "Rotaract Arad Cetate | Service Above Self",
    keywords: [
        "Rotaract Arad Cetate",
        "Rotaract",
        "Service Above Self",
        "ONG",
        "comunitate"
    ],
    authors: [{ name: "Catalin Casuneanu" }],
    creator: "Catalin Casuneanu",
    applicationName: "Rotaract Arad Cetate",
    appleWebApp: {
        title: "Rotaract Arad Cetate",
        capable: true,
        statusBarStyle: "default",
    },
    openGraph: {
        title: "Rotaract Arad Cetate | Service Above Self",
        description:
            "Rotaract Arad Cetate | Service Above Self",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Rotaract Arad Cetate",
        description:
            "Rotaract Arad Cetate | Service Above Self",
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <LenisScroll />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
