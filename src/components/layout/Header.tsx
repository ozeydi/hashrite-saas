import { Hash } from 'lucide-react';
import { Button } from '@/components';

const Header = () => {
  return (
    <header className='bg-white border-b border-gray-200'>
      <div className='max-w-7xl mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <Hash className='w-8 h-8 text-blue-600' />
            <div>
              <h1 className='text-xl font-bold text-gray-900'>HashRite.com</h1>
              <p className='text-xs text-gray-500'>
                File Integrity Verification
              </p>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <Button variant='outline' size='sm'>
              Sign In
            </Button>
            <Button variant='primary' size='sm'>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
