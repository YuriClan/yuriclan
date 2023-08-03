"use client"

import * as React from "react"
import Link from "next/link"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import style from "../../styles/style.module.css"
import { cva } from "class-variance-authority"
import {cn} from "lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string;}[] = [
  {
    title: "Documentation",
    href: "/",
    description:
      "Official docs for YuriBot, customize it for your Server",
  },
  {
    title: "Blog",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content and nightly-updates",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Status",
    href: "/docs/primitives/tabs",
    description:
      "Check uptime running services are online.",
  },
  {
    title: "Contribute",
    href: "/docs/primitives/tooltip",
    description:
      "We always welcome new minds and fresh ideas.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className={style.NavigationMenu}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent className={style.NavigationMenuContent}>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] notoneof">
              <li className={style.yuriGetStarted}>
                <NavigationMenuLink asChild>
                  <a
                    className={style.yuriGetStartedHref}
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className={style.gettingStarted}>
                      <div className="mb-2 mt-4 text-lg font-medium">
                        yuri/bot
                      </div>
                      <p className={style.gettingStartedText}>
                        YuriBot: Enrich Your Discord Community with Power and Style!
                      </p>
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction" className={style.anchorLinks}>
                About Yuri, YuriClan and our story.
              </ListItem>
              <ListItem href="/docs/installation" title="Invite" className={style.anchorLinks}>
                Invite Yuri to your Server and enjoy the perks.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Features" className={style.anchorLinks}>
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Service</NavigationMenuTrigger>
          <NavigationMenuContent className={style.NavigationMenuContent}>
            <ul className={style.componentTableElements}>
            {/* < className={style.componentTableElements}> */}
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className={style.anchorLinks}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className={style.Docs}>Documentation</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default NavigationMenuDemo