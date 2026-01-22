import type { InputHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label, className, ...props }: InputProps) => {
  return (
    <div className='space-y-1'>
      {label && (
        <label className='block text-sm font-medium text-gray-700'>
          {label}
        </label>
      )}
      <input
        className={cn(
          'w-full px-4 py-2 border border-gray-300 rounded-lg',
          'focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
          'outline-none transition-colors',
          className,
        )}
        {...props}
      />
    </div>
  );
};

export default Input;
