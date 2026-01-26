import type { ReactNode } from 'react';

interface MainContentProps {
  sidebar: ReactNode;
  main: ReactNode;
  features: ReactNode;
}

const MainContent = ({ sidebar, main, features }: MainContentProps) => {
  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
        {/* Sidebar */}
        <div className='lg:col-span-1'>{sidebar}</div>

        {/* Main Area */}
        <div className='lg:col-span-3'>
          {main}
          {features}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
