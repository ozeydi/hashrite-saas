import { Lock } from 'lucide-react';

interface SidebarProps {
  activeTab: 'generate' | 'verify';
  onTabChange: (tab: 'generate' | 'verify') => void;
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <div className='space-y-6'>
      {/* Quick Actions */}
      <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-4'>
        <h3 className='font-bold text-gray-800 mb-4'>Quick Actions</h3>
        <div className='space-y-3'>
          <button
            onClick={() => onTabChange('generate')}
            className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
              activeTab === 'generate'
                ? 'bg-blue-600 text-white'
                : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            Generate Hashes
          </button>
          <button
            onClick={() => onTabChange('verify')}
            className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
              activeTab === 'verify'
                ? 'bg-blue-600 text-white'
                : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            Verify Files
          </button>
        </div>
      </div>

      {/* Stats Card */}
      <div className='bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-4'>
        <div className='mb-4'>
          <h3 className='font-bold mb-2'>Hash Stats</h3>
          <div className='space-y-2 text-sm'>
            <div className='flex justify-between'>
              <span>Files Processed</span>
              <span className='font-bold'>1,234</span>
            </div>
            <div className='flex justify-between'>
              <span>Total Hashes</span>
              <span className='font-bold'>8,567</span>
            </div>
          </div>
        </div>
        <div className='h-1 bg-blue-500/50 rounded-full overflow-hidden'>
          <div className='h-full bg-white w-2/3 rounded-full'></div>
        </div>
      </div>

      {/* Security Info */}
      <div className='bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4'>
        <div className='flex items-start gap-3'>
          <Lock className='w-5 h-5 text-green-600 flex-shrink-0 mt-0.5' />
          <div>
            <h4 className='font-semibold text-green-800 mb-1'>
              Security First
            </h4>
            <p className='text-sm text-green-700'>
              All processing happens locally in your browser. Files are never
              uploaded to servers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
