import { NextResponse } from 'next/server';
import { appendToSheet } from '@/utils/googleSheets';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    
    await appendToSheet('waitlist', { email });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist submission error:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    );
  }
}