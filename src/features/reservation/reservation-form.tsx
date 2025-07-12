'use client'

import { useState } from 'react'
import { useCouponStore } from '@/stores/coupon-store'
import { ReservationData } from '@/lib/types'
import { formatDiscount } from '@/lib/utils'

export function ReservationForm() {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    couponId: '',
  })
  
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null)
  const [discount, setDiscount] = useState<number>(0)
  
  const couponStore = useCouponStore()
  const validCoupons = couponStore.getValidCoupons()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) : value
    }))
  }

  const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const couponCode = e.target.value
    setFormData(prev => ({ ...prev, couponId: couponCode }))
    
    const coupon = validCoupons.find(c => c.id === couponCode)
    if (coupon) {
      setAppliedCoupon(coupon.id)
      setDiscount(coupon.discount)
    } else {
      setAppliedCoupon(null)
      setDiscount(0)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (appliedCoupon) {
      couponStore.useCoupon(appliedCoupon)
    }
    
    // Here you would typically send the reservation data to your backend
    alert(`Reservation submitted! ${discount > 0 ? `Discount applied: ${formatDiscount(discount)}` : ''}`)
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: 2,
      couponId: '',
    })
    setAppliedCoupon(null)
    setDiscount(0)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand-secondary focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand-secondary focus:outline-none"
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand-secondary focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Number of Guests *
          </label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleInputChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand-secondary focus:outline-none"
          >
            <option value={1}>1 Guest</option>
            <option value={2}>2 Guests</option>
            <option value={3}>3 Guests</option>
            <option value={4}>4 Guests</option>
            <option value={5}>5+ Guests</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Date *
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand-secondary focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Time *
          </label>
          <select
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-brand-secondary focus:outline-none"
            required
          >
            <option value="">Select time</option>
            <option value="17:00">5:00 PM</option>
            <option value="17:30">5:30 PM</option>
            <option value="18:00">6:00 PM</option>
            <option value="18:30">6:30 PM</option>
            <option value="19:00">7:00 PM</option>
            <option value="19:30">7:30 PM</option>
            <option value="20:00">8:00 PM</option>
            <option value="20:30">8:30 PM</option>
            <option value="21:00">9:00 PM</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Coupon Code
        </label>
        <input
          type="text"
          name="couponId"
          value={formData.couponId}
          onChange={handleCouponChange}
          placeholder="Enter your puzzle completion coupon"
          className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:outline-none ${
            appliedCoupon 
              ? 'border-green-500 focus:border-green-500' 
              : formData.couponId && !appliedCoupon
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-700 focus:border-brand-secondary'
          }`}
        />
        {appliedCoupon && (
          <p className="text-green-400 text-sm mt-2">
            ✓ Valid coupon applied: {formatDiscount(discount)}
          </p>
        )}
        {formData.couponId && !appliedCoupon && (
          <p className="text-red-400 text-sm mt-2">
            Invalid or expired coupon code
          </p>
        )}
      </div>

      {validCoupons.length > 0 && (
        <div className="mb-6">
          <p className="text-sm text-gray-400 mb-2">Available coupons:</p>
          <div className="space-y-1">
            {validCoupons.map((coupon) => (
              <button
                key={coupon.id}
                type="button"
                onClick={() => {
                  setFormData(prev => ({ ...prev, couponId: coupon.id }))
                  setAppliedCoupon(coupon.id)
                  setDiscount(coupon.discount)
                }}
                className="block w-full text-left text-sm bg-gray-800 hover:bg-gray-700 p-2 rounded text-brand-secondary"
              >
                {coupon.id} - {formatDiscount(coupon.discount)} ({coupon.difficulty})
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-brand-secondary text-brand-primary py-4 text-lg font-semibold rounded-lg hover:bg-opacity-90 transition-all"
      >
        Confirm Reservation{discount > 0 && ` (${formatDiscount(discount)} discount applied)`}
      </button>
    </form>
  )
}