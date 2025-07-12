import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Coupon, Difficulty } from '@/lib/types'
import { PUZZLE_CONFIGS } from '@/lib/constants'

interface CouponStore {
  coupons: Coupon[]
  generateCoupon: (difficulty: Difficulty) => Coupon
  useCoupon: (couponId: string) => void
  getValidCoupons: () => Coupon[]
}

const generateCouponId = (difficulty: Difficulty): string => {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 8)
  return `${difficulty}-${timestamp}-${random}`
}

export const useCouponStore = create<CouponStore>()(
  persist(
    (set, get) => ({
      coupons: [],

      generateCoupon: (difficulty: Difficulty) => {
        const config = PUZZLE_CONFIGS[difficulty]
        const expiresAt = new Date()
        expiresAt.setDate(expiresAt.getDate() + 30)
        
        const coupon: Coupon = {
          id: generateCouponId(difficulty),
          discount: config.discount,
          difficulty,
          expiresAt,
          isUsed: false,
        }

        set(state => ({
          coupons: [...state.coupons, coupon]
        }))

        return coupon
      },

      useCoupon: (couponId: string) => {
        set(state => ({
          coupons: state.coupons.map(coupon =>
            coupon.id === couponId ? { ...coupon, isUsed: true } : coupon
          )
        }))
      },

      getValidCoupons: () => {
        const now = new Date()
        return get().coupons.filter(
          coupon => !coupon.isUsed && coupon.expiresAt > now
        )
      },
    }),
    {
      name: 'brasserie-coupons',
    }
  )
)