import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container flex md:flex-row flex-col items-center justify-between gap-6 pb-8 pt-6 md:py-10 lg:py-44">
      <div className="grid gap-6">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            {/* Beautifully designed components 
          built with Radix UI and Tailwind CSS. */}
            Amplify Your <span className="underline">Sales</span> on{" "}
            <br className="hidden sm:inline" />
            <span className="text-pink-500">Social Media</span> with{" "}
            <span className="text-sky-600">Optochka</span>!
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Drive Revenue, Reach More Customers, and Grow Your Business
          </p>
        </div>
        <div className="flex gap-2 flex-col md:flex-row">
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.signin}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Sign in
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.signup}
            className={buttonVariants({ size: "lg" })}
          >
            Get Started for Free
          </Link>
        </div>
      </div>
      <div className="order-1 flex w-full md:justify-center">
        <Image
          src="/assets/hero.png"
          alt="Hero Image"
          width={400}
          height={537}
        />
      </div>
    </section>
  )
}
