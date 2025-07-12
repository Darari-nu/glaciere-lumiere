import Link from 'next/link'
import { ReservationForm } from '@/features/reservation/reservation-form'

export default function ReservationPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-8">
          <Link href="/" className="text-brand-secondary hover:underline mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-heading text-brand-secondary mb-4">
            Make a Reservation
          </h1>
          <p className="text-gray-300">
            Reserve your table at Brasserie Lumière
          </p>
        </div>

        <ReservationForm />
      </div>
    </div>
  )
}