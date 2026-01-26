interface Props {
  selected: string[];
  onChange: (algorithms: string[]) => void;
}

const algorithms = ['MD5', 'SHA-1', 'SHA-256', 'SHA-512'];

export default function AlgorithmSelector({ selected, onChange }: Props) {
  const toggleAlgorithm = (algo: string) => {
    if (selected.includes(algo)) {
      onChange(selected.filter((a) => a !== algo));
    } else {
      onChange([...selected, algo]);
    }
  };

  return (
    <div className='mb-6'>
      <h3 className='text-lg font-semibold mb-3'>Select Algorithms</h3>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
        {algorithms.map((algo) => (
          <button
            key={algo}
            onClick={() => toggleAlgorithm(algo)}
            className={`p-4 rounded-xl border-2 transition-all ${
              selected.includes(algo)
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 text-gray-700 hover:border-gray-300'
            }`}
          >
            <div className='font-bold'>{algo}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
