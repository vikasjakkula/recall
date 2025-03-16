import { NextResponse } from 'next/server'
import { requireAuth } from '@/utils/auth'
import { createOrder } from '@/utils/razorpay'

export async function POST() {
  try {
    // Verify user is authenticated
    const userId = await requireAuth()

    // Create Razorpay order
    const { success, orderId, error } = await createOrder(userId)

    if (!success || !orderId) {
      return NextResponse.json(
        { error: error || 'Failed to create order' },
        { status: 500 }
      )
    }

    return NextResponse.json({ orderId })
  } catch (error) {
    console.error('Create order error:', error)
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    )
  }
} 