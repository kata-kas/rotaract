import { Metadata } from "next"
import Image from "next/image"

import { MainNav } from "@/components/main-nav"
import { ModeToggle } from '@/components/mode-toggle';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
export const metadata: Metadata = {
  title: "Rotaract Arad Cetate Club",
  description: "Empowering Change, Inspiring Futures",
}

export default function DashboardPage() {
  return (
    <>
      <div
        className="w-full h-screen flex justify-center items-center overflow-hidden relative bg-black">
        <Image
          src={`/hand.webp`}
          alt="Hero Image"
          className="opacity-40 object-cover"
          fill
        />
        <div className="flex flex-col justify-center items-center px-3">
          <h1 className=" text-center text-3xl md:text-5xl text-white font-bold drop-shadow-lg">WELCOME TO <br />
            <span className="text-primary">Rotaract Arad Cetate Club!</span>
          </h1>
          <p className="mt-5 text-center text-lg text-white opacity-90">
            Empowering Change, Inspiring Futures <br/>
            Join us in our mission to serve, lead, and inspire for a better tomorrow!
          </p>
          <Button className="opacity-90 mt-5">Are you ready to make a difference?</Button>
        </div>
      </div>
    </>
  )
}
