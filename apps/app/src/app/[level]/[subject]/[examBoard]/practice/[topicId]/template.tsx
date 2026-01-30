'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function TopicTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const [templateKey, setTemplateKey] = useState(0);

  // Force complete remount when topic ID changes
  useEffect(() => {
    setTemplateKey(prev => prev + 1);
    console.log('[TopicTemplate] Forcing remount for topic:', params.topicId);
  }, [params.topicId, params.level, params.subject, params.examBoard]);

  return (
    <div key={templateKey}>
      {children}
    </div>
  );
}