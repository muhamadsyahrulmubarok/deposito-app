import Link from 'next/link'
import { headers } from 'next/headers'

export default function NotFound() {
    const headersList = headers()
    const domain = headersList.get('host')
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <Link href="/">Go back home</Link>
        </div>
    )
}
