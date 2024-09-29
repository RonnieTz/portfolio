'use client';

import Desktop from '@/app/features/desktop/Desktop';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const DynamicComponent = dynamic(
  () => import('@/app/features/desktop/Desktop'),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main>
      <DynamicComponent />
    </main>
  );
}
