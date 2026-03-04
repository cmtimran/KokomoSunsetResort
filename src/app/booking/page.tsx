import Booking from '@/components/Booking'
import { Suspense } from 'react'

export default function BookingPage() {
    return (
        <main className="min-h-screen pt-20 bg-white">
            <Suspense fallback={<div className="flex h-64 items-center justify-center">Loading booking details...</div>}>
                <Booking />
            </Suspense>
        </main>
    )
}
