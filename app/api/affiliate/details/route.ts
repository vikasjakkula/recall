import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { requireAuth } from '@/utils/auth'

export async function GET() {
  try {
    // Authenticate user
    const userId = await requireAuth()
    
    const supabase = createClient()

    // Get affiliate details with visit and sale counts
    const { data: affiliate, error } = await supabase
      .from('affiliates')
      .select(`
        affiliate_code,
        visits:affiliate_visits(count),
        sales:affiliate_sales(count),
        total_commission:affiliate_sales(commission_amount)
      `)
      .eq('user_id', userId)
      .single()

    if (error) {
      console.error('Error fetching affiliate:', error)
      return NextResponse.json({ error: 'Failed to fetch affiliate details' }, { status: 500 })
    }

    if (!affiliate) {
      return NextResponse.json({ error: 'User is not registered as an affiliate' }, { status: 404 })
    }

    // Calculate total visits and sales
    const totalVisits = affiliate.visits?.[0]?.count || 0
    const totalSales = affiliate.sales?.[0]?.count || 0
    const totalCommission = affiliate.total_commission?.reduce((sum: number, sale: any) => 
      sum + (sale.commission_amount || 0), 0) || 0

    return NextResponse.json({
      affiliateCode: affiliate.affiliate_code,
      stats: {
        totalVisits,
        totalSales,
        totalCommission
      }
    })

  } catch (error) {
    console.error('Error in affiliate details:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    )
  }
} 