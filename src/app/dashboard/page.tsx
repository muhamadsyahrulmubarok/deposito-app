import Link from 'next/link'
import { Button } from '@/components/ui/button'
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
import { Package2Icon, MoreHorizontalIcon } from '@/lib/components/icons/icons'
import Sidebar from '@/lib/components/dashboard/sidebar'
import { createClient } from '@/lib/supabase/server'

const dashboard = () => {
    const supabase = createClient()
    // const
    return (
        <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
                {/* show sidebar */}
                <Sidebar />
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
                    <Link className="lg:hidden" href="#">
                        <Package2Icon className="h-6 w-6" />
                        <span className="sr-only">Home</span>
                    </Link>
                    <div className="w-full">
                        <h1 className="font-semibold text-lg">Recent Orders</h1>
                    </div>
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
                                    src="/placeholder.svg"
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
                    <div className="border shadow-sm rounded-lg p-2">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">
                                        Order
                                    </TableHead>
                                    <TableHead className="min-w-[150px]">
                                        Customer
                                    </TableHead>
                                    <TableHead className="hidden md:table-cell">
                                        Channel
                                    </TableHead>
                                    <TableHead className="hidden md:table-cell">
                                        Date
                                    </TableHead>
                                    <TableHead className="text-right">
                                        Total
                                    </TableHead>
                                    <TableHead className="hidden sm:table-cell">
                                        Status
                                    </TableHead>
                                    <TableHead className="text-right">
                                        Actions
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        #3210
                                    </TableCell>
                                    <TableCell>Olivia Martin</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        Online Store
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        February 20, 2022
                                    </TableCell>
                                    <TableCell className="text-right">
                                        $42.25
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        Shipped
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                >
                                                    <MoreHorizontalIcon className="w-4 h-4" />
                                                    <span className="sr-only">
                                                        Actions
                                                    </span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>
                                                    View order
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    Customer details
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        #3209
                                    </TableCell>
                                    <TableCell>Ava Johnson</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        Shop
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        January 5, 2022
                                    </TableCell>
                                    <TableCell className="text-right">
                                        $74.99
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        Paid
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                >
                                                    <MoreHorizontalIcon className="w-4 h-4" />
                                                    <span className="sr-only">
                                                        Actions
                                                    </span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>
                                                    View order
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    Customer details
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        #3204
                                    </TableCell>
                                    <TableCell>Michael Johnson</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        Shop
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        August 3, 2021
                                    </TableCell>
                                    <TableCell className="text-right">
                                        $64.75
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        Unfulfilled
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                >
                                                    <MoreHorizontalIcon className="w-4 h-4" />
                                                    <span className="sr-only">
                                                        Actions
                                                    </span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>
                                                    View order
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    Customer details
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        #3203
                                    </TableCell>
                                    <TableCell>Lisa Anderson</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        Online Store
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        July 15, 2021
                                    </TableCell>
                                    <TableCell className="text-right">
                                        $34.50
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        Shipped
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                >
                                                    <MoreHorizontalIcon className="w-4 h-4" />
                                                    <span className="sr-only">
                                                        Actions
                                                    </span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>
                                                    View order
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    Customer details
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        #3202
                                    </TableCell>
                                    <TableCell>Samantha Green</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        Shop
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        June 5, 2021
                                    </TableCell>
                                    <TableCell className="text-right">
                                        $89.99
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        Paid
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                >
                                                    <MoreHorizontalIcon className="w-4 h-4" />
                                                    <span className="sr-only">
                                                        Actions
                                                    </span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>
                                                    View order
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    Customer details
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        #3201
                                    </TableCell>
                                    <TableCell>Adam Barlow</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        Online Store
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        May 20, 2021
                                    </TableCell>
                                    <TableCell className="text-right">
                                        $24.99
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        Unfulfilled
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                >
                                                    <MoreHorizontalIcon className="w-4 h-4" />
                                                    <span className="sr-only">
                                                        Actions
                                                    </span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>
                                                    View order
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    Customer details
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        #3207
                                    </TableCell>
                                    <TableCell>Sophia Anderson</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        Shop
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        November 2, 2021
                                    </TableCell>
                                    <TableCell className="text-right">
                                        $99.99
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        Paid
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                >
                                                    <MoreHorizontalIcon className="w-4 h-4" />
                                                    <span className="sr-only">
                                                        Actions
                                                    </span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>
                                                    View order
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    Customer details
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        #3206
                                    </TableCell>
                                    <TableCell>Daniel Smith</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        Online Store
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        October 7, 2021
                                    </TableCell>
                                    <TableCell className="text-right">
                                        $67.50
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        Shipped
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                >
                                                    <MoreHorizontalIcon className="w-4 h-4" />
                                                    <span className="sr-only">
                                                        Actions
                                                    </span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>
                                                    View order
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    Customer details
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
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

export default dashboard
