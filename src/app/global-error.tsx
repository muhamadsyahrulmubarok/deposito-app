'use client'

export default function GlobalError({
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div>
            <h6>ini global error</h6>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}
