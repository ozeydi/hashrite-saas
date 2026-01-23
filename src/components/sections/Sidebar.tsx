import { Zap, Lock } from 'lucide-react';
import { Button, Card } from '@/components';

interface SidebarProps {
  activeTab: 'generate' | 'verify' | 'api';
  onTabChange: (tab: 'generate' | 'verify' | 'api') => void;
}

const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  return (
    <div className='space-y-6'>
      {/* Stats Card */}
      <Card className='bg-gradient-to-br from-gray-900 to-gray-800 text-white'>
        <div className='flex items-center gap-3 mb-4'>
          <Zap className='w-5 h-5 text-blue-400' />
          <h3 className='font-bold'>Coming Soon</h3>
        </div>
        <div className='space-y-4'>
          <div>
            <div className='flex justify-between items-center mb-1'>
              <span className='text-gray-300 text-sm'>
                Development Progress
              </span>
              <span className='font-bold'>20%</span>
            </div>
            <div className='h-1 bg-gray-700 rounded-full overflow-hidden'>
              <div className='h-full bg-blue-500 w-1/4'></div>
            </div>
          </div>
          <div className='pt-4 border-t border-gray-700'>
            <div className='space-y-2 text-sm'>
              <div className='flex items-center'>
                <div className='w-2 h-2 bg-green-500 rounded-full mr-2'></div>
                <span>Project Setup ✓</span>
              </div>
              <div className='flex items-center'>
                <div className='w-2 h-2 bg-yellow-500 rounded-full mr-2'></div>
                <span>UI Components ✓</span>
              </div>
              <div className='flex items-center'>
                <div className='w-2 h-2 bg-gray-500 rounded-full mr-2'></div>
                <span>Hash Features</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <Card>
        <h3 className='font-bold text-gray-800 mb-4'>Quick Actions</h3>
        <div className='space-y-3'>
          <Button
            variant={activeTab === 'generate' ? 'primary' : 'outline'}
            onClick={() => onTabChange('generate')}
            fullWidth
          >
            Generate Hashes
          </Button>
          <Button
            variant={activeTab === 'verify' ? 'primary' : 'outline'}
            onClick={() => onTabChange('verify')}
            fullWidth
          >
            Verify Files
          </Button>
          <Button
            variant={activeTab === 'api' ? 'primary' : 'outline'}
            onClick={() => onTabChange('api')}
            fullWidth
          >
            API Access
          </Button>
        </div>
      </Card>

      {/* Security Info */}
      <Card className='bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200'>
        <div className='flex items-start gap-3'>
          <Lock className='w-5 h-5 text-green-600 flex-shrink-0 mt-0.5' />
          <div>
            <h4 className='font-semibold text-green-800 mb-1'>
              Security First
            </h4>
            <p className='text-sm text-green-700'>
              All processing happens locally in your browser. Files are never
              uploaded to our servers.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
