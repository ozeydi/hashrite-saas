import type { HashResult } from '@/types';
import { Copy, Download, Check, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface HashResultsProps {
  results: HashResult[];
  filename: string;
  fileSize: number;
  hashId: string;
  onCopyAll: () => void;
  onDownloadJson: () => void;
}

const HashResults: React.FC<HashResultsProps> = ({
  results,
  filename,
  fileSize,
  hashId,
  onCopyAll,
  onDownloadJson,
}) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className='card animate-slide-in'>
      <div className='flex justify-between items-center mb-6'>
        <div>
          <h3 className='text-2xl font-bold text-gray-800'>Hash Results</h3>
          <p className='text-gray-600 mt-1'>
            {filename} ({formatFileSize(fileSize)})
          </p>
        </div>
        <div className='flex gap-2'>
          <button
            onClick={onCopyAll}
            className='btn-secondary flex items-center gap-2'
          >
            <Copy className='w-4 h-4' />
            Copy All
          </button>
          <button
            onClick={onDownloadJson}
            className='btn-secondary flex items-center gap-2'
          >
            <Download className='w-4 h-4' />
            Download JSON
          </button>
        </div>
      </div>

      <div className='space-y-4'>
        {results.map((result, index) => (
          <div
            key={result.algorithm}
            className='border border-gray-200 rounded-xl p-4 hover:border-primary-300 transition-colors'
          >
            <div className='flex justify-between items-center mb-2'>
              <div className='flex items-center gap-3'>
                <span className='font-bold text-gray-800'>
                  {result.algorithm.toUpperCase()}
                </span>
                <span className='text-xs px-2 py-1 bg-gray-100 rounded'>
                  {result.algorithm.includes('256')
                    ? '256-bit'
                    : result.algorithm.includes('512')
                      ? '512-bit'
                      : '128-bit'}
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(result.hash, index)}
                className='flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800'
              >
                {copiedIndex === index ? (
                  <>
                    <Check className='w-4 h-4' />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className='w-4 h-4' />
                    Copy
                  </>
                )}
              </button>
            </div>

            <div className='hash-string mt-2'>{result.hash}</div>

            <div className='flex justify-between items-center mt-3 text-sm text-gray-500'>
              <span>
                Generated: {new Date(result.timestamp).toLocaleTimeString()}
              </span>
              <span className='font-mono'>
                Length: {result.hash.length} chars
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200'>
        <div className='flex items-start gap-3'>
          <AlertCircle className='w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5' />
          <div>
            <p className='font-semibold text-gray-800'>Verification ID</p>
            <p className='text-sm text-gray-600 mt-1'>
              Use this ID to verify the file later:
              <span className='font-mono bg-gray-100 px-2 py-1 rounded ml-2'>
                {hashId}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HashResults;
