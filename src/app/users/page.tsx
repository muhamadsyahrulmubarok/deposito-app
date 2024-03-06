import ComponentsDatatablesExport from '@/lib/components/users/users'
import IconBell from '@/lib/components/icons/icon-bell'
import { Metadata } from 'next'
import React from 'react'
import Header from '@/lib/components/header'
import Sidebar from '@/lib/components/sidebar'
import Footer from '@/lib/components/footer'

export const metadata: Metadata = {
    title: 'Export Table',
}

const Export = () => {
    return (
        <div>
            <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                    <IconBell />
                </div>
            </div>
            <ComponentsDatatablesExport />
        </div>
    )
}

export default Export
