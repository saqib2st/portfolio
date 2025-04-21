import { NextRequest, NextResponse } from 'next/server';

// Simplified API handlers with minimal parameters to avoid type errors
export async function GET() {
  return NextResponse.json({ value: 0 });
}

export async function PUT(request: Request) {
  const data = await request.json();
  return NextResponse.json({ 
    success: true, 
    increment: data.increment
  });
} 