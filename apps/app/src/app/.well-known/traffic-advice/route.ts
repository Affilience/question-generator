import { NextResponse } from 'next/server';

export async function GET() {
  // Return empty response for traffic-advice requests
  // This prevents 404 errors in logs for Chrome's privacy preserving prefetch proxy
  return new NextResponse(null, { status: 204 });
}