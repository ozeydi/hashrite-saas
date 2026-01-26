import { useState } from 'react';
import { Upload, File, X } from 'lucide-react';

interface FileUploadProps {
  onFileSelect?: (file: File) => void;
  maxSizeMB?: number;
}

const FileUpload = ({ onFileSelect, maxSizeMB = 100 }: FileUploadProps) => {
  const [dragOver, setDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState('');

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const validateFile = (file: File) => {
    setError('');

    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(`File size exceeds ${maxSizeMB}MB limit`);
      return;
    }

    setSelectedFile(file);
    if (onFileSelect) {
      onFileSelect(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      validateFile(files[0]);
    }
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      validateFile(files[0]);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setError('');
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' Bytes';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  return (
    <div className='w-full'>
      {!selectedFile ? (
        <div
          className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all ${
            dragOver
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-300 hover:border-blue-400'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type='file'
            className='hidden'
            id='file-upload'
            onChange={handleFileInput}
          />
          <label htmlFor='file-upload' className='cursor-pointer'>
            <Upload
              className={`w-12 h-12 mx-auto mb-4 ${dragOver ? 'text-blue-500' : 'text-gray-400'}`}
            />
            <p className='text-lg font-semibold text-gray-700 mb-2'>
              Drop file here or click to browse
            </p>
            <p className='text-gray-500'>Max file size: {maxSizeMB}MB</p>
          </label>
        </div>
      ) : (
        <div className='border border-gray-200 rounded-xl p-4 bg-gray-50'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <File className='w-5 h-5 text-gray-600' />
              <div>
                <p className='font-medium text-gray-800'>{selectedFile.name}</p>
                <p className='text-sm text-gray-600'>
                  {formatFileSize(selectedFile.size)}
                </p>
              </div>
            </div>
            <button
              onClick={removeFile}
              className='text-gray-400 hover:text-gray-600'
            >
              <X className='w-5 h-5' />
            </button>
          </div>
        </div>
      )}

      {error && <p className='mt-2 text-sm text-red-600'>{error}</p>}
    </div>
  );
};

export default FileUpload;
