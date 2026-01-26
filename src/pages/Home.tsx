import { useState } from 'react';
import Header from '../components/layout/Header';
import VerifyTab from '../components/VerifyTab';
import {
  FeaturesGrid,
  Footer,
  GenerateTab,
  Hero,
  MainContent,
  Sidebar,
} from '@/components';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'generate' | 'verify'>('generate');

  const renderMainContent = () => {
    if (activeTab === 'generate') {
      return <GenerateTab />;
    }
    return <VerifyTab />;
  };

  return (
    <>
      <Header />
      <Hero />

      <MainContent
        sidebar={<Sidebar activeTab={activeTab} onTabChange={setActiveTab} />}
        main={renderMainContent()}
        features={<FeaturesGrid />}
      />

      <Footer />
    </>
  );
}
