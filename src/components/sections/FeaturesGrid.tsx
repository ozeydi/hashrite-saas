import { Shield, Upload, Users } from 'lucide-react';
import { Card } from '@/components';

const FeaturesGrid = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Processing',
      description:
        'All calculations happen locally in your browser. No files uploaded to servers.',
      color: 'blue',
    },
    {
      icon: Upload,
      title: 'Drag & Drop',
      description:
        'Simple file upload with drag & drop support. Supports files up to 100MB.',
      color: 'green',
    },
    {
      icon: Users,
      title: 'API Access',
      description:
        'Full REST API for developers. Integrate hash verification into your apps.',
      color: 'purple',
    },
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {features.map((feature) => (
        <Card key={feature.title}>
          <div
            className={`p-3 bg-${feature.color}-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4 mx-auto`}
          >
            <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
          </div>
          <h3 className='font-bold text-gray-800 text-center mb-2'>
            {feature.title}
          </h3>
          <p className='text-sm text-gray-600 text-center'>
            {feature.description}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default FeaturesGrid;
