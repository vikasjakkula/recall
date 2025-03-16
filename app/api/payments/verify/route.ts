import { NextResponse } from 'next/server'
import { requireAuth } from '@/utils/auth'
import { verifyPaymentSignature } from '@/utils/razorpay'
import { createClient } from '@/utils/supabase/server'

export async function POST(request: Request) {
  try {
    // Verify user is authenticated
    const userId = await requireAuth()

    // Get payment details
    const body = await request.json()
    const { orderId, paymentId, signature } = body

    if (!orderId || !paymentId || !signature) {
      return NextResponse.json(
        { error: 'Missing payment details' },
        { status: 400 }
      )
    }

    // Verify payment signature
    const isValid = verifyPaymentSignature(orderId, paymentId, signature)

    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid payment signature' },
        { status: 400 }
      )
    }

    // Update user's premium status
    const supabase = createClient()
    const { error: updateError } = await supabase
      .from('users')
      .update({
        is_premium: true,
        premium_since: new Date().toISOString()
      })
      .eq('id', userId)

    if (updateError) {
      console.error('Failed to update user status:', updateError)
      return NextResponse.json(
        { error: 'Failed to update user status' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Payment verification error:', error)
    return NextResponse.json(
      { error: 'Payment verification failed' },
      { status: 500 }
    )
  }
} 