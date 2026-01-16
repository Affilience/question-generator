import { NextRequest, NextResponse } from 'next/server';
import { getTopicsBySubjectBoardAndLevel } from '@/lib/topics';
import { ExamBoard, QualificationLevel, Subject } from '@/types';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const subject = searchParams.get('subject') as Subject;
  const board = searchParams.get('board') as ExamBoard;
  const level = searchParams.get('level') as QualificationLevel;

  if (!subject || !board || !level) {
    return NextResponse.json(
      { error: 'Missing required params: subject, board, level' },
      { status: 400 }
    );
  }

  const topics = getTopicsBySubjectBoardAndLevel(subject, board, level);

  return NextResponse.json(topics);
}
