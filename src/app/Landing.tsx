import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MountainIcon } from '@/lib/components/icons/icons'

export default function Component() {
    return (
        <div className="flex flex-col min-h-[100dvh] bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link className="flex items-center justify-center" href="/">
                    <MountainIcon className="h-6 w-6" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="/"
                    >
                        Features
                    </Link>
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="/"
                    >
                        Pricing
                    </Link>
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="/"
                    >
                        About
                    </Link>
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="/"
                    >
                        Contact
                    </Link>
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="/auth/login"
                    >
                        Login
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y bg-white dark:bg-gray-900">
                    <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
                        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                        Banking Services
                                    </div>
                                    <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                        Modern Banking Solutions
                                    </h1>
                                    <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        Access your money anytime, anywhere with
                                        our secure and user-friendly online
                                        banking platform.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-start space-y-4">
                                <img
                                    alt="Hero"
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                                    height="310"
                                    src="https://placehold.co/600x400/EEE/31343C"
                                    width="550"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
                    <div className="container space-y-12 px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Our Services
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Tailored to Your Needs
                                </h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Enjoy a wide range of banking services
                                    designed to make your financial life easier.
                                    Whether you're saving for the future, making
                                    everyday transactions, or planning your
                                    investments, we've got you covered.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <img
                                alt="Image"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                height="310"
                                src="https://placehold.co/600x400/EEE/31343C"
                                width="550"
                            />
                            <div className="grid gap-4">
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">
                                        Online Banking
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Access your accounts, check your
                                        balance, transfer funds, and pay bills
                                        online with our secure and convenient
                                        online banking platform.
                                    </p>
                                </div>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">
                                        Mobile Banking
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Bank on the go with our mobile banking
                                        app. Manage your money, deposit checks,
                                        and receive account alerts from your
                                        smartphone or tablet.
                                    </p>
                                </div>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">
                                        Credit Cards
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Choose from a variety of credit cards
                                        with different features and benefits,
                                        including cashback rewards, travel
                                        perks, and low APR rates.
                                    </p>
                                </div>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">
                                        Savings Accounts
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Start saving for your financial goals
                                        with our range of savings accounts.
                                        Whether you're planning a vacation,
                                        buying a home, or building an emergency
                                        fund, we have the right account for you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Experience the workflow the best frontend teams
                                love.
                            </h2>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Let your team focus on shipping features instead
                                of managing infrastructure with automated CI/CD.
                            </p>
                        </div>
                        <div className="mx-auto w-full max-w-sm space-y-2">
                            <form className="flex space-x-2">
                                <Input
                                    className="max-w-lg flex-1"
                                    placeholder="Enter your email"
                                    type="email"
                                />
                                <Button type="submit">Sign Up</Button>
                            </form>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                Sign up to get notified when we launch.
                                <Link
                                    className="underline underline-offset-2"
                                    href="/"
                                >
                                    Terms & Conditions
                                </Link>
                            </p>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Performance
                                </div>
                                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Traffic spikes should be exciting, not
                                    scary.
                                </h2>
                                <Link
                                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-950"
                                    href="/"
                                >
                                    Get Started
                                </Link>
                            </div>
                            <div className="flex flex-col items-start space-y-4">
                                <img
                                    alt="Image"
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                                    height="310"
                                    src="https://placehold.co/600x400/EEE/31343C"
                                    width="550"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    © 2024 Acme Inc. All rights reserved.
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link
                        className="text-xs hover:underline underline-offset-4"
                        href="/"
                    >
                        Terms of Service
                    </Link>
                    <Link
                        className="text-xs hover:underline underline-offset-4"
                        href="/"
                    >
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}
