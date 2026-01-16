import { NextResponse } from 'next/server';
import { getCacheStats } from '@/lib/questionCache';

export const runtime = 'edge';

export async function GET() {
  const stats = await getCacheStats();

  return NextResponse.json(stats);
}
