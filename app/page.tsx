import Desktop from '@/features/desktop/Desktop';
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('@/features/desktop/Desktop'), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <DynamicComponent />
    </main>
  );
}
