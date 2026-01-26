import { Fingerprint } from 'lucide-react';

export default function Header() {
  return (
    <header className='bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex items-center gap-3'>
          <Fingerprint className='w-8 h-8' />
          <div>
            <h1 className='text-2xl font-bold'>HashRite.com</h1>
            <p className='text-sm text-blue-100'>
              File Integrity & Verification
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
