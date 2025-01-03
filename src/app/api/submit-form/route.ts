import { NextResponse } from 'next/server';
import { appendToSheet } from '@/utils/googleSheets';

export async function POST(req: Request) {
  try {
    const { type, data } = await req.json();
    await appendToSheet(type, data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}