import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import type { VerificationResult as VerificationResultType } from '@/types';

interface VerificationResultProps {
  result: VerificationResultType;
}

const VerificationResult: React.FC<VerificationResultProps> = ({ result }) => {
  const getStatusIcon = () => {
    if (result.status === 'match') {
      return <CheckCircle className='w-8 h-8 text-green-500' />;
    } else if (result.status === 'mismatch') {
      return <XCircle className='w-8 h-8 text-red-500' />;
    }
    return <AlertCircle className='w-8 h-8 text-blue-500' />;
  };

  const getStatusMessage = () => {
    if (result.status === 'match') {
      return 'File integrity verified successfully!';
    } else if (result.status === 'mismatch') {
      return 'File hash does not match the expected value!';
    }
    return 'Hash calculated successfully. No expected hash provided for verification.';
  };

  const getStatusColor = () => {
    if (result.status === 'match') return 'bg-green-50 border-green-200';
    if (result.status === 'mismatch') return 'bg-red-50 border-red-200';
    return 'bg-blue-50 border-blue-200';
  };

  const getTextColor = () => {
    if (result.status === 'match') return 'text-green-800';
    if (result.status === 'mismatch') return 'text-red-800';
    return 'text-blue-800';
  };

  return (
    <div className={`card border-2 ${getStatusColor()} animate-slide-in`}>
      <div className='flex items-center gap-4 mb-6'>
        {getStatusIcon()}
        <div>
          <h3 className='text-xl font-bold text-gray-800'>
            Verification Result
          </h3>
          <p className={`font-semibold ${getTextColor()}`}>
            {getStatusMessage()}
          </p>
        </div>
      </div>

      <div className='space-y-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Algorithm
          </label>
          <div className='hash-string'>{result.algorithm.toUpperCase()}</div>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Calculated Hash
          </label>
          <div className='hash-string'>{result.calculatedHash}</div>
        </div>

        {result.providedHash && result.providedHash !== 'Not provided' && (
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Expected Hash
            </label>
            <div className='hash-string'>{result.providedHash}</div>
          </div>
        )}

        {result.providedHash && result.providedHash !== 'Not provided' && (
          <div
            className={`p-3 rounded-lg ${result.match ? 'bg-green-100' : 'bg-red-100'}`}
          >
            <div className='flex items-center gap-2'>
              {result.match ? (
                <CheckCircle className='w-5 h-5 text-green-600' />
              ) : (
                <XCircle className='w-5 h-5 text-red-600' />
              )}
              <span
                className={
                  result.match
                    ? 'text-green-800 font-semibold'
                    : 'text-red-800 font-semibold'
                }
              >
                {result.match
                  ? 'Hashes match perfectly!'
                  : 'Hashes do NOT match!'}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerificationResult;
