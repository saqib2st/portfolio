import { NextResponse } from 'next/server';

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    
    // This is a placeholder API that doesn't actually store any data
    // You would implement actual counter functionality here
    
    return NextResponse.json({ 
      success: true, 
      increment: data.increment 
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update counter' },
      { status: 400 }
    );
  }
}

export async function GET() {
  // Return a dummy counter value
  return NextResponse.json({ value: 0 });
} 