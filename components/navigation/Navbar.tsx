"use client";

import React from "react";
import Link from "next/link";
import { Book, CircleDollarSign, House, Menu, Wrench, X } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "../ui/elements/logo";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
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
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const miniNavbarComponent: {
  title: string;
  href: string;
  icon: React.JSX.Element;
}[] = [
  {
    title: "Home",
    href: "/",
    icon: <House strokeWidth={3} />,
  },
  {
    title: "About",
    href: "/about",
    icon: <Book strokeWidth={3} />,
  },
  {
    title: "Tools",
    href: "/tools",
    icon: <Wrench strokeWidth={3} />,
  },
  {
    title: "Pricing",
    href: "/pricing",
    icon: <CircleDollarSign strokeWidth={3} />,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navbarToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 right-0 w-full z-30">
      <div className="mx-6 lg:mx-20 mt-10 flex justify-between items-center p-2 bg-white rounded-xl">
        <div className="flex gap-4 justify-center items-center w-full lg:w-max">
          {/* ================================================== first section ================================================== */}
          <div className="flex items-center justify-between w-full lg:w-max">
            <Link href={"/"}>
              <Logo />
            </Link>
            <button
              onClick={navbarToggle}
              className="lg:hidden p-2 border border-muted-foreground/30 cursor-pointer rounded-xl"
            >
              <Menu />
            </button>
          </div>

          {/* ================================================== mid section ================================================== */}
          <NavigationMenu viewport={false} className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            Beautifully designed components built with Tailwind
                            CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/docs">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>List</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#">
                          <div className="font-medium">Components</div>
                          <div className="text-muted-foreground">
                            Browse all components in the library.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">
                          <div className="font-medium">Documentation</div>
                          <div className="text-muted-foreground">
                            Learn how to use the library.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">
                          <div className="font-medium">Blog</div>
                          <div className="text-muted-foreground">
                            Read our latest blog posts.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#">Components</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">Documentation</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">Blocks</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* ================================================== auth section ================================================== */}
        <div className="hidden lg:block">
          <div className="flex gap-1 justify-center items-center">
            <Link href={"/login"}>
              <Button variant={"outline"}>Login</Button>
            </Link>
            <Link href={"/signup"}>
              <Button variant={"blue"}>Sign up free</Button>
            </Link>
          </div>
        </div>
      </div>
      {/* ================================================== open-able section ================================================== */}
      {isOpen && (
        <div className="w-full h-screen top-0 right-0 absolute px-6 z-40 bg-black/80 backdrop-blur-xl">
          <div className="flex items-center justify-between mt-10  p-2 bg-white rounded-xl">
            <Logo />
            <button
              onClick={navbarToggle}
              className="p-2 border border-muted-foreground/30 cursor-pointer rounded-xl"
            >
              <X />
            </button>
          </div>
          {miniNavbarComponent.map((item) => (
            <div
              key={item.title}
              className="p-2 bg-white rounded-xl flex flex-col gap-6 mt-6"
            >
              <Link href={item.href}>
                <div className="flex gap-2 items-center">
                  <div className="p-2 bg-[#FFDE63] w-max rounded-lg">
                    {item.icon}
                  </div>
                  <span className="text-xl">{item.title}</span>
                </div>
              </Link>
            </div>
          ))}
          <div className="flex flex-col items-center justify-center gap-2 mt-8">
            <Link className="w-full" href={"/login"}>
              <Button className="rounded-lg w-full" variant={"secondary"}>
                Login
              </Button>
            </Link>
            <Link className="w-full" href={"/signup"}>
              <Button className="rounded-lg w-full" variant={"blue"}>
                Sign up free
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default Navbar;
