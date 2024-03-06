'use client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9Amait2Wn2R
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link'
import {
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenu,
} from '@/components/ui/navigation-menu'

export default function Component() {
    return (
        <header className="flex items-center h-16 px-4 w-full shrink-0 bg-green-400">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuLink>
                        <Link
                            className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                            href="#"
                        >
                            Home
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                        <Link
                            className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                            href="#"
                        >
                            Product
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                        <Link
                            className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                            href="#"
                        >
                            About
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}
