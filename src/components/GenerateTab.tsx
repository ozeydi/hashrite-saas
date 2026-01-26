import { useState } from 'react';
import FileUpload from './ui/FileUpload';
import TextInput from './ui/TextInput';
import AlgorithmSelector from './AlgorithmSelector';
import HashDisplay from './HashDisplay';

export default function GenerateTab() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [textInput, setTextInput] = useState('');
  const [algorithms, setAlgorithms] = useState(['SHA-256']);
  const [hashes, setHashes] = useState<Record<string, string>>({});

  const generateHashes = () => {
    const content = selectedFile ? selectedFile.name : textInput;
    if (!content.trim()) {
      alert('Please upload a file or enter text');
      return;
    }

    const newHashes: Record<string, string> = {};
    algorithms.forEach((algo) => {
      newHashes[algo] = Array.from({ length: 64 }, () =>
        Math.floor(Math.random() * 16).toString(16),
      ).join('');
    });
    setHashes(newHashes);
  };

  return (
    <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-6'>
      <h2 className='text-2xl font-bold text-gray-800 mb-6'>
        Generate Cryptographic Hashes
      </h2>

      <FileUpload onFileSelect={setSelectedFile} />
      <TextInput value={textInput} onChange={setTextInput} />
      <AlgorithmSelector selected={algorithms} onChange={setAlgorithms} />

      <button
        onClick={generateHashes}
        className='w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all mt-6'
      >
        Generate Hashes
      </button>

      {Object.keys(hashes).length > 0 && (
        <HashDisplay
          filename={selectedFile?.name || 'Text Input'}
          hashes={hashes}
        />
      )}
    </div>
  );
}
