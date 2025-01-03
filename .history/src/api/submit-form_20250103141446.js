import { NextResponse } from 'next/server';
import { appendToSheet } from '@/utils/googleSheets';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    await appendToSheet([email]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit' },
      { status: 500 }
    );
  }
}