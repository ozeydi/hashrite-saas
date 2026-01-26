import { Hash, CheckCircle, Code } from 'lucide-react';
import { Button, Card } from '@/components';
import TabNavigation from '../layout/TabNavigation';

interface TabContentProps {
  activeTab: 'generate' | 'verify' | 'api';
  onTabChange: (tab: 'generate' | 'verify' | 'api') => void;
}

const TabContent = ({ activeTab, onTabChange }: TabContentProps) => {
  const tabContent = {
    generate: {
      icon: Hash,
      title: 'Hash Generation',
      description:
        'Upload files or enter text to generate cryptographic hashes using multiple algorithms.',
      color: 'blue',
    },
    verify: {
      icon: CheckCircle,
      title: 'File Verification',
      description:
        'Verify file integrity by comparing calculated hashes against expected values.',
      color: 'green',
    },
    api: {
      icon: Code,
      title: 'API Documentation',
      description:
        'Integrate HashRite into your applications using our REST API.',
      color: 'purple',
    },
  };

  const currentTab = tabContent[activeTab];

  return (
    <Card className='mb-8'>
      <TabNavigation activeTab={activeTab} onTabChange={onTabChange} />

      <div className='mt-8 p-8'>
        <div className='text-center py-12'>
          <div
            className={`inline-flex items-center justify-center p-4 bg-${currentTab.color}-100 rounded-2xl mb-6`}
          >
            <currentTab.icon
              className={`w-12 h-12 text-${currentTab.color}-600`}
            />
          </div>
          <h2 className='text-3xl font-bold text-gray-800 mb-4'>
            {currentTab.title}
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto mb-8'>
            {currentTab.description} This feature is currently under development
            and will be available soon.
          </p>
          <Button variant='outline' size='lg'>
            Coming Soon
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TabContent;
