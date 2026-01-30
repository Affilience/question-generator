'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SubtopicTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const [templateKey, setTemplateKey] = useState(0);

  // Force complete remount when any param changes
  useEffect(() => {
    setTemplateKey(prev => prev + 1);
    console.log('[SubtopicTemplate] Forcing remount for params:', params);
  }, [params.topicId, params.subtopic, params.level, params.subject, params.examBoard]);

  return (
    <div key={templateKey}>
      {children}
    </div>
  );
}