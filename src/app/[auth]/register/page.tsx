import { redirect } from 'next/navigation'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createClient } from '@/lib/supabase/client'

import { SubmitButton } from './submit-button'

const Register = () => {
    const signUp = async (formData: FormData) => {
        'use server'

        // const origin = headers().get('origin')
        const email = formData.get('email') as string
        const password = formData.get('password') as string
        const supabase = createClient()

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        })

        if (error) {
            console.log(error)
        }
        // console.log(data)
        // return redirect to auth/login
        return redirect('/auth/login')
    }
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-sm rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Register</h1>
                    <p className="text-zinc-500 dark:text-zinc-400">
                        By register, you accept our terms of service and privacy
                        policy
                    </p>
                </div>
                <form>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                placeholder="m@example.com"
                                required
                                type="email"
                                name="email"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                placeholder="********"
                                required
                                type="password"
                                name="password"
                            />
                        </div>
                        <SubmitButton
                            formAction={signUp}
                            className="w-full bg-black text-white"
                            pendingText="Registering..."
                        >
                            Register
                        </SubmitButton>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Register
