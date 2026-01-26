import { Shield, Hash } from 'lucide-react';

export default function Hero() {
  return (
    <section className='bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8'>
      <div className='max-w-4xl mx-auto text-center px-4'>
        <div className='flex items-center justify-center gap-4 mb-4'>
          <Hash className='w-10 h-10' />
          <Shield className='w-10 h-10' />
        </div>
        <h1 className='text-3xl font-bold mb-3'>
          Cryptographic File Integrity & Verification
        </h1>
        <p className='text-blue-100 text-lg'>
          Generate, verify, and secure digital fingerprints of your files
        </p>
        <div className='mt-6 flex flex-wrap justify-center gap-4'>
          <span className='px-3 py-1 bg-white/20 rounded-full text-sm'>
            🔒 100% Local Processing
          </span>
          <span className='px-3 py-1 bg-white/20 rounded-full text-sm'>
            ⚡ Instant Results
          </span>
          <span className='px-3 py-1 bg-white/20 rounded-full text-sm'>
            🆓 Free Forever
          </span>
        </div>
      </div>
    </section>
  );
}
