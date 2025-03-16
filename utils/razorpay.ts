import crypto from 'crypto'

// @ts-ignore
const Razorpay = require('razorpay')

// Add type declarations


declare global {
  namespace NodeJS {
    interface ProcessEnv {
      RAZORPAY_KEY_ID: string
      RAZORPAY_KEY_SECRET: string
      NEXT_PUBLIC_RAZORPAY_KEY_ID: string
    }
  }
}

export const PLAN_AMOUNT = 900 * 100 // ₹900 in paise

// Initialize Razorpay only on the server side
let razorpay: any = null
if (typeof window === 'undefined') {
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    throw new Error('RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be set in environment variables')
  }

  razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
  })
}

export async function createOrder(userId: string): Promise<{
  success: boolean
  orderId?: string
  error?: string
}> {
  try {
    if (!razorpay) {
      throw new Error('Razorpay not initialized')
    }

    // Generate a shorter receipt ID (max 40 chars)
    const timestamp = Date.now().toString().slice(-8) // Last 8 digits of timestamp
    const receiptId = `rcpt_${userId.slice(0, 8)}_${timestamp}`

    const order = await razorpay.orders.create({
      amount: PLAN_AMOUNT,
      currency: 'INR',
      receipt: receiptId,
      notes: {
        userId
      }
    })

    return {
      success: true,
      orderId: order.id
    }
  } catch (error) {
    console.error('Razorpay order creation error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create order'
    }
  }
}

export function verifyPaymentSignature(
  orderId: string,
  paymentId: string,
  signature: string
): boolean {
  if (!process.env.RAZORPAY_KEY_SECRET) {
    throw new Error('RAZORPAY_KEY_SECRET must be set in environment variables')
  }

  const text = orderId + '|' + paymentId
  const generated_signature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(text)
    .digest('hex')
  
  return generated_signature === signature
}

// Client-side configuration
export const RAZORPAY_CONFIG = {
  key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  currency: 'INR',
  amount: PLAN_AMOUNT,
  name: 'EamcetPro',
  description: 'EamcetPro Premium Subscription',
  theme: {
    color: '#2563EB'
  }
} 