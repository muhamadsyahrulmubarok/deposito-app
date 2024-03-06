/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Gmob31VdEYg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenu,
} from '@/components/ui/dropdown-menu'
import {
    TableHead,
    TableRow,
    TableHeader,
    TableCell,
    TableBody,
    Table,
} from '@/components/ui/table'
import {
    BellIcon,
    HomeIcon,
    LayoutGridIcon,
    Package2Icon,
    PackageIcon,
    SearchIcon,
    ShoppingCartIcon,
} from '@/lib/components/icons/icons'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
export default async function Component() {
    // const supabase = createClientComponentClient()
    const cookieStore = cookies()
    const supabase = createServerComponentClient({
        cookies: () => cookieStore,
    })
    const { data } = await supabase.from('todos').select()
    console.log(data)
    return (
        <div className="flex min-h-screen w-full">
            <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
                <div className="flex h-full flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-6">
                        <Link
                            className="flex items-center gap-2 font-semibold"
                            href="#"
                        >
                            <Package2Icon className="h-6 w-6" />
                            <span className="">Acme Inc</span>
                        </Link>
                    </div>
                    <nav className="grid items-start px-4 text-sm font-medium">
                        <Link
                            className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                            href="#"
                        >
                            <HomeIcon className="h-4 w-4" />
                            Home
                        </Link>
                        <Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="#"
                        >
                            <PackageIcon className="h-4 w-4" />
                            Products
                        </Link>
                        <Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="#"
                        >
                            <LayoutGridIcon className="h-4 w-4" />
                            Categories
                        </Link>
                        <Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="#"
                        >
                            <ShoppingCartIcon className="h-4 w-4" />
                            Orders
                        </Link>
                    </nav>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
                    <Button className="lg:hidden" variant="ghost">
                        <Package2Icon className="w-6 h-6" />
                        <span className="sr-only">Home</span>
                    </Button>
                    <div className="w-full flex-1">
                        <form>
                            <div className="relative">
                                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                                <Input
                                    className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                                    placeholder="Search products..."
                                    type="search"
                                />
                            </div>
                        </form>
                    </div>

                    <Button
                        className="ml-auto h-8 w-8"
                        size="icon"
                        variant="outline"
                    >
                        <BellIcon className="h-4 w-4" />
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                                size="icon"
                                variant="ghost"
                            >
                                <img
                                    alt="Avatar"
                                    className="rounded-full"
                                    height="32"
                                    src="https://placehold.co/100"
                                    style={{
                                        aspectRatio: '32/32',
                                        objectFit: 'cover',
                                    }}
                                    width="32"
                                />
                                <span className="sr-only">
                                    Toggle user menu
                                </span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                    <div className="flex items-center">
                        <h1 className="font-semibold text-lg md:text-2xl">
                            Products
                        </h1>
                        <Button className="ml-auto" size="sm">
                            Add product
                        </Button>
                    </div>
                    <div className="border shadow-sm rounded-lg">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[80px]">
                                        Image
                                    </TableHead>
                                    <TableHead className="max-w-[150px]">
                                        Name
                                    </TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead>Inventory</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <img
                                            alt="Product image"
                                            className="aspect-square rounded-md object-cover"
                                            height="64"
                                            src="https://placehold.co/100"
                                            width="64"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        Glimmer Lamps
                                    </TableCell>
                                    <TableCell>$49.99</TableCell>
                                    <TableCell>500 in stock</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        In Production
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <img
                                            alt="Product image"
                                            className="aspect-square rounded-md object-cover"
                                            height="64"
                                            src="https://placehold.co/100"
                                            width="64"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        Aqua Filters
                                    </TableCell>
                                    <TableCell>$29.99</TableCell>
                                    <TableCell>750 in stock</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        Available for Order
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <img
                                            alt="Product image"
                                            className="aspect-square rounded-md object-cover"
                                            height="64"
                                            src="https://placehold.co/100"
                                            width="64"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        Eco Planters
                                    </TableCell>
                                    <TableCell>$19.99</TableCell>
                                    <TableCell>300 in stock</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        Backordered
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <img
                                            alt="Product image"
                                            className="aspect-square rounded-md object-cover"
                                            height="64"
                                            src="https://placehold.co/100"
                                            width="64"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        Zest Juicers
                                    </TableCell>
                                    <TableCell>$59.99</TableCell>
                                    <TableCell>1000 in stock</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        Newly Launched
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <img
                                            alt="Product image"
                                            className="aspect-square rounded-md object-cover"
                                            height="64"
                                            src="https://placehold.co/100"
                                            width="64"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        Flexi Wearables
                                    </TableCell>
                                    <TableCell>$79.99</TableCell>
                                    <TableCell>200 in stock</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        Selling Fast
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </main>
            </div>
        </div>
    )
}
