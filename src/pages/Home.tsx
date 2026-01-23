import { useState } from 'react';
import Hero from '@/components/sections/Hero';
import MainContent from '@/components/sections/MainContent';
import Sidebar from '@/components/sections/Sidebar';
import TabContent from '@/components/sections/TabContent';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import Footer from '@/components/layout/Footer';

const Home = () => {
  const [activeTab, setActiveTab] = useState<'generate' | 'verify' | 'api'>(
    'generate',
  );

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
      <Hero />

      <MainContent
        sidebar={<Sidebar activeTab={activeTab} onTabChange={setActiveTab} />}
        main={<TabContent activeTab={activeTab} onTabChange={setActiveTab} />}
        features={<FeaturesGrid />}
      />

      <Footer />
    </div>
  );
};

export default Home;
