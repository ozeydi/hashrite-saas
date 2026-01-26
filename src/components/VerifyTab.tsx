import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function VerifyTab() {
  const [file, setFile] = useState<File | null>(null);
  const [expectedHash, setExpectedHash] = useState('');
  const [algorithm, setAlgorithm] = useState('SHA-256');
  const [result, setResult] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  const handleVerify = () => {
    if (!file && !expectedHash.trim()) {
      alert('Please upload a file and enter expected hash');
      return;
    }

    // Mock verification
    const isMatch = Math.random() > 0.5;
    const resultText = isMatch
      ? '✅ File integrity verified successfully!'
      : '❌ Hash does not match. File may be corrupted.';
    setResult(resultText);
  };

  return (
    <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-6'>
      <h2 className='text-2xl font-bold text-gray-800 mb-6'>
        Verify File Integrity
      </h2>

      <div className='space-y-6'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Upload File
          </label>
          <input
            type='file'
            onChange={handleFileChange}
            className='w-full p-3 border border-gray-300 rounded-xl'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Expected Hash
          </label>
          <input
            type='text'
            value={expectedHash}
            onChange={(e) => setExpectedHash(e.target.value)}
            placeholder='Paste the expected hash value...'
            className='w-full p-3 border border-gray-300 rounded-xl font-mono'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Algorithm
          </label>
          <select
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-xl'
          >
            <option>MD5</option>
            <option>SHA-1</option>
            <option>SHA-256</option>
            <option>SHA-512</option>
          </select>
        </div>

        <button
          onClick={handleVerify}
          className='w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all'
        >
          Verify Integrity
        </button>

        {result && (
          <div className='p-4 bg-green-50 border border-green-200 rounded-xl'>
            <div className='flex items-center gap-3'>
              <CheckCircle className='w-5 h-5 text-green-600' />
              <p className='text-green-800'>{result}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
