import { type NextRequest, NextResponse } from 'next/server'
import { updateSession } from '@/lib/supabase/updateSession'
import { getSession } from '@/lib/supabase/updateSession'

export async function middleware(request: NextRequest) {
    const session = await getSession(request)
    if (request.nextUrl.pathname.startsWith('/dashboard') && !session) {
        // If the user is not logged in and tries to access /dashboard, redirect them to /auth/login
        return NextResponse.redirect('/auth/login')
    } else if (request.nextUrl.pathname.startsWith('/auth/login') && session) {
        // If the user is logged in and tries to access /auth/login, redirect them to /dashboard
        return NextResponse.redirect('/dashboard')
    }
    return await updateSession(request)
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
