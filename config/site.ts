export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "optochka.com",
  description: "Start a store on Telegram and sell in just a few clicks",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Features",
      href: "/features",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/optochka",
    github: "https://github.com/optochka",
    signin: "https://app.optochka.com/auth/login",
    signup: "https://app.optochka.com/auth/register",
  },
}
