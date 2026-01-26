import { FileText } from 'lucide-react';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function TextInput({ value, onChange }: Props) {
  return (
    <div className='mb-6'>
      <div className='flex items-center gap-2 mb-3'>
        <FileText className='w-5 h-5 text-gray-600' />
        <label className='text-lg font-semibold text-gray-700'>
          Or enter text directly:
        </label>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder='Type or paste text here to generate hashes...'
        className='w-full h-32 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
      />
      {value && (
        <div className='mt-2 flex justify-between text-sm text-gray-500'>
          <span>{value.length} characters</span>
          <button
            onClick={() => onChange('')}
            className='text-red-600 hover:text-red-800'
          >
            Clear text
          </button>
        </div>
      )}
    </div>
  );
}
