"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"

const services = [
    {
        title: "Web Development",
        href: "/services/web-development",
        description: "Custom websites and web applications built with modern technologies"
    },
    {
        title: "Mobile Apps",
        href: "/services/mobile-apps",
        description: "Native and cross-platform mobile applications for iOS and Android"
    },
    {
        title: "AI & ML Solutions",
        href: "/services/ai-ml",
        description: "Artificial intelligence and machine learning solutions for your business"
    },
    {
        title: "Cloud Services",
        href: "/services/cloud",
        description: "Cloud migration, deployment, and infrastructure management"
    },
    {
        title: "SEO & Digital Marketing",
        href: "/services/seo",
        description: "Search engine optimization and digital marketing strategies"
    }
]

export function Navigation() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
                <div className="mr-6 hidden md:flex">
                    <Logo className="mr-8" />
                </div>

                <div className="hidden md:flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                        Home
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {services.map((service) => (
                                            <ListItem
                                                key={service.title}
                                                title={service.title}
                                                href={service.href}
                                            >
                                                {service.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                        About
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/portfolio" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                        Portfolio
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/contact" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                        Contact
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                        >
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="pr-0">
                        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                        <MobileNav />
                    </SheetContent>
                </Sheet>

                <div className="flex flex-1 items-center justify-between space-x-4 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <Logo className="md:hidden" size="sm" />
                    </div>
                    <nav className="flex items-center">
                        <Button asChild>
                            <Link href="/contact">Get Quote</Link>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

function MobileNav() {
    return (
        <div className="flex flex-col space-y-4 p-4">
            <Logo size="md" />
            <div className="flex flex-col space-y-3">
                <Link
                    href="/"
                    className="text-foreground/70 transition-colors hover:text-foreground py-2"
                >
                    Home
                </Link>
                <div className="flex flex-col space-y-3 pl-4">
                    <span className="text-sm font-medium text-foreground">Services</span>
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className="text-sm text-foreground/70 transition-colors hover:text-foreground py-1"
                        >
                            {service.title}
                        </Link>
                    ))}
                </div>
                <Link
                    href="/about"
                    className="text-foreground/70 transition-colors hover:text-foreground py-2"
                >
                    About
                </Link>
                <Link
                    href="/portfolio"
                    className="text-foreground/70 transition-colors hover:text-foreground py-2"
                >
                    Portfolio
                </Link>
                <Link
                    href="/contact"
                    className="text-foreground/70 transition-colors hover:text-foreground py-2"
                >
                    Contact
                </Link>
            </div>
        </div>
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