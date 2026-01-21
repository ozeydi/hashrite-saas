import { Hash, Shield, Upload } from 'lucide-react';
import './index.css';

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50'>
      <div className='max-w-7xl mx-auto px-4 py-12'>
        {/* Header */}
        <div className='text-center mb-12'>
          <div className='flex items-center justify-center gap-4 mb-6'>
            <div className='p-4 bg-blue-100 rounded-2xl'>
              <Hash className='w-12 h-12 text-blue-600' />
            </div>
            <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              HashRite.com
            </h1>
          </div>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
            Cryptographic File Integrity & Verification SaaS
          </p>
        </div>

        {/* Main Content */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          {/* Left Card - Welcome */}
          <div className='bg-white rounded-2xl shadow-xl p-8'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>
              Welcome to HashRite
            </h2>
            <p className='text-gray-600 mb-6'>
              A secure platform for generating and verifying cryptographic
              hashes of your files. All processing happens locally in your
              browser for maximum privacy.
            </p>

            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <Shield className='w-5 h-5 text-green-600' />
                <span className='font-medium'>Secure & Private</span>
              </div>
              <div className='flex items-center gap-3'>
                <Upload className='w-5 h-5 text-blue-600' />
                <span className='font-medium'>Drag & Drop Files</span>
              </div>
            </div>
          </div>

          {/* Right Card - Quick Actions */}
          <div className='bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-2xl shadow-xl p-8'>
            <h2 className='text-2xl font-bold mb-6'>Get Started</h2>

            <div className='space-y-4'>
              <div className='bg-white/10 backdrop-blur-sm p-4 rounded-xl'>
                <h3 className='font-bold mb-2'>Development Mode</h3>
                <p className='text-sm opacity-90'>
                  The full HashRite experience is under development. Check back
                  soon!
                </p>
              </div>

              <div className='bg-white/10 backdrop-blur-sm p-4 rounded-xl'>
                <h3 className='font-bold mb-2'>Coming Features</h3>
                <ul className='text-sm space-y-1 opacity-90'>
                  <li>• File hash generation</li>
                  <li>• Integrity verification</li>
                  <li>• Multiple algorithms (SHA-256, MD5, etc.)</li>
                  <li>• API access for developers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className='mt-12 pt-8 border-t border-gray-200 text-center'>
          <p className='text-gray-600'>
            © {new Date().getFullYear()} HashRite.com • File Integrity
            Verification SaaS
          </p>
          <p className='text-sm text-gray-500 mt-2'>
            All processing happens locally in your browser for maximum privacy
            and security
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
