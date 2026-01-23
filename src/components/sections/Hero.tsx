import { Hash } from 'lucide-react';

const Hero = () => {
  return (
    <div className='bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white'>
      <div className='max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <div className='flex items-center justify-center gap-4 mb-6'>
            <div className='p-3 bg-white/20 rounded-2xl backdrop-blur-sm'>
              <Hash className='w-12 h-12' />
            </div>
            <h1 className='text-5xl md:text-6xl font-bold'>
              Hash<span className='text-blue-200'>Rite</span>.com
            </h1>
          </div>
          <p className='text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8'>
            Cryptographic File Integrity & Verification SaaS
          </p>
          <p className='text-lg text-blue-200 max-w-2xl mx-auto'>
            Generate, verify, and secure digital fingerprints of your files. All
            processing happens locally in your browser.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
