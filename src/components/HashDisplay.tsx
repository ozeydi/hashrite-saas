import { Copy, Check, Download } from 'lucide-react';
import { useState } from 'react';

interface Props {
  filename: string;
  hashes: Record<string, string>;
}

export default function HashDisplay({ filename, hashes }: Props) {
  const [copied, setCopied] = useState<string | null>(null);

  const copyHash = async (hash: string, algo: string) => {
    await navigator.clipboard.writeText(hash);
    setCopied(algo);
    setTimeout(() => setCopied(null), 2000);
  };

  const exportResults = () => {
    const data = {
      filename,
      timestamp: new Date().toISOString(),
      hashes,
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hashrite-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className='bg-white rounded-2xl shadow-lg p-6'>
      <div className='flex justify-between items-center mb-6'>
        <div>
          <h3 className='text-xl font-bold text-gray-800'>Hash Results</h3>
          <p className='text-gray-600'>File: {filename}</p>
        </div>
        <button
          onClick={exportResults}
          className='flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'
        >
          <Download className='w-4 h-4' />
          Export Results
        </button>
      </div>

      <div className='space-y-4'>
        {Object.entries(hashes).map(([algo, hash]) => (
          <div key={algo} className='border border-gray-200 rounded-xl p-4'>
            <div className='flex justify-between items-center mb-3'>
              <span className='font-bold'>{algo}</span>
              <button
                onClick={() => copyHash(hash, algo)}
                className='text-sm text-blue-600 hover:text-blue-800 flex items-center gap-2'
              >
                {copied === algo ? (
                  <>
                    <Check className='w-4 h-4' /> Copied
                  </>
                ) : (
                  <>
                    <Copy className='w-4 h-4' /> Copy
                  </>
                )}
              </button>
            </div>
            <div className='bg-gray-50 p-3 rounded-lg font-mono text-sm break-all'>
              {hash}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
