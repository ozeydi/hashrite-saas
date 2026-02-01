import { Fingerprint } from 'lucide-react';
import { ExternalLink } from 'lucide-react';

export default function Header() {
  return (
    <header className='bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
          <div className='flex items-center gap-3'>
            <Fingerprint className='w-8 h-8' />
            <div>
              <h1 className='text-2xl font-bold'>HashRite.com</h1>
              <p className='text-sm text-blue-100'>
                File Integrity & Verification
              </p>
            </div>
          </div>

          {/* For Sale Badge */}
          <a
            href='https://www.brandbucket.com/names/hashrite'
            target='_blank'
            rel='noopener noreferrer'
            className='group relative inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 animate-pulse'
          >
            <span className='relative flex h-3 w-3'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-white'></span>
            </span>
            <span className='font-bold'>🚨 DOMAIN FOR SALE</span>
            <ExternalLink className='w-4 h-4' />
            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full'>
              BrandBucket
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
