import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link";
import {Card, CardContent, CardHeader, CardFooter, CardTitle} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export const metadata: Metadata = {
  title: "Rotaract Arad Cetate Club",
  description: "Empowering Change, Inspiring Futures",
}

export default function DashboardPage() {
  return (
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="hero">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Volunteer and Make a Difference
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Join our team of dedicated volunteers and help us make a positive impact in our community.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                      className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="#"
                  >
                    Join Now
                  </Link>
                  <Link
                      className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                      href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <Image
                  alt="Volunteering"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                  height="550"
                  src="/hand.webp"
                  width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="volunteer">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Empowering Communities, Transforming Lives
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our organization is dedicated to making a positive impact in the lives of those in need. Through our
                  volunteer programs, we provide support, resources, and opportunities for individuals to contribute to
                  their communities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                  alt="Impact"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="/volunteer.avif"
                  width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Empowering Communities</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        We work closely with local communities to identify and address their unique needs, empowering
                        them to create sustainable change.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Transforming Lives</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Our volunteer programs provide opportunities for individuals to make a tangible difference in
                        the lives of those in need, fostering personal growth and fulfillment.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Sustainable Impact</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        We focus on long-term, sustainable solutions that address the root causes of social issues,
                        ensuring our impact continues to grow over time.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="volunteer-opportunities">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Volunteer Opportunities
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Find Your Volunteer Role</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore our diverse range of volunteer opportunities and find the perfect way to make a difference in
                  your community.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card>
                <CardHeader>
                  <HandIcon className="h-10 w-10 text-gray-500 dark:text-gray-400"/>
                  <CardTitle>Food Bank</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Help sort, package, and distribute food to those in need in our local community.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                      className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="#"
                  >
                    Sign Up
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <HandIcon className="h-10 w-10 text-gray-500 dark:text-gray-400"/>
                  <CardTitle>Tutoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Provide one-on-one or small group tutoring to help students succeed in their studies.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                      className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="#"
                  >
                    Sign Up
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <HandIcon className="h-10 w-10 text-gray-500 dark:text-gray-400"/>
                  <CardTitle>Habitat for Humanity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Join our team of volunteers to help build and renovate homes for families in need.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                      className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="#"
                  >
                    Sign Up
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="donate">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Donate</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Support Our Cause</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Your donation can make a significant difference in the lives of those we serve. Every contribution
                  helps us continue our mission of empowering communities and transforming lives.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                >
                  Donate Now
                </Link>
                <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="testimonials">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Volunteer Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hear From Our Volunteers</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Read inspiring stories from our volunteers and learn how they have made a difference in their
                  communities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-8">
              <Card>
                <CardContent className="flex flex-col items-start space-y-4">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage alt="Sarah Johnson" src="/placeholder-avatar.jpg"/>
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">Sarah Johnson</h3>
                      <p className="text-gray-500 dark:text-gray-400">Volunteer, Food Bank</p>
                    </div>
                  </div>
                  <blockquote className="text-lg font-medium leading-relaxed text-gray-900 dark:text-gray-50">
                    &quot;Volunteering at the food bank has been one of the most rewarding experiences of my life.
                    Seeing the
                    direct impact we have on families in need is truly humbling.&quot;
                  </blockquote>
                  <p className="text-gray-500 dark:text-gray-400">
                    Sarah has been volunteering with us for over 2 years, dedicating her time to sorting, packaging, and
                    distributing food to those in need in our local community.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start space-y-4">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage alt="Michael Lee" src="/placeholder-avatar.jpg"/>
                      <AvatarFallback>ML</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">Michael Lee</h3>
                      <p className="text-gray-500 dark:text-gray-400">Volunteer, Habitat for Humanity</p>
                    </div>
                  </div>
                  <blockquote className="text-lg font-medium leading-relaxed text-gray-900 dark:text-gray-50">
                    &quot;Volunteering with Habitat for Humanity has been an incredibly rewarding experience. Seeing the
                    joy
                    on
                    the faces of the families we&apos;ve helped is what keeps me coming back.&quot;
                  </blockquote>
                  <p className="text-gray-500 dark:text-gray-400">
                    Michael has been a dedicated volunteer with our Habitat for Humanity program, helping to build and
                    renovate homes for families in need.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start space-y-4">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage alt="Emily Chen" src="/placeholder-avatar.jpg"/>
                      <AvatarFallback>EC</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">Emily Chen</h3>
                      <p className="text-gray-500 dark:text-gray-400">Volunteer, Tutoring</p>
                    </div>
                  </div>
                  <blockquote className="text-lg font-medium leading-relaxed text-gray-900 dark:text-gray-50">
                    &quot;Tutoring students has been an incredibly rewarding experience. Watching them grow and succeed
                    academically is the best feeling in the world.&quot;
                  </blockquote>
                  <p className="text-gray-500 dark:text-gray-400">
                    Emily has been volunteering as a tutor, providing one-on-one and small group support to help
                    students in
                    our community succeed in their studies.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start space-y-4">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage alt="David Nguyen" src="/placeholder-avatar.jpg"/>
                      <AvatarFallback>DN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">David Nguyen</h3>
                      <p className="text-gray-500 dark:text-gray-400">Volunteer, Food Bank</p>
                    </div>
                  </div>
                  <blockquote className="text-lg font-medium leading-relaxed text-gray-900 dark:text-gray-50">
                    &quot;Volunteering at the food bank has been a truly humbling experience. Knowing that I&apos;m
                    making a
                    direct
                    impact on families in need is incredibly rewarding.&quot;
                  </blockquote>
                  <p className="text-gray-500 dark:text-gray-400">
                    David has been a regular volunteer at our food bank, helping to sort, package, and distribute food
                    to
                    those in need in our local community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <footer className="w-full py-12 flex items-center">
          <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:gap-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2024 Rotaract Arad Cetate. All rights reserved.
            </p>
            <nav className="flex items-center gap-4">
              <Link
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
              >
                Privacy Policy
              </Link>
              <Link
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
              >
                Terms of Service
              </Link>
              <Link
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </footer>
      </main>
  )
}

function HandIcon(props: any) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/>
        <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/>
        <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/>
        <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
      </svg>
  )
}
