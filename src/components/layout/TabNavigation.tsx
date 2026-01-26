interface TabNavigationProps {
  activeTab: 'generate' | 'verify' | 'api';
  onTabChange: (tab: 'generate' | 'verify' | 'api') => void;
}

const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  const tabs = [
    { id: 'generate' as const, label: 'Generate Hashes', icon: '🔑' },
    { id: 'verify' as const, label: 'Verify Files', icon: '✅' },
    { id: 'api' as const, label: 'API Docs', icon: '📚' },
  ];

  return (
    <div className='border-b border-gray-200'>
      <nav className='flex space-x-8'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              py-4 px-1 border-b-2 font-medium text-sm transition-colors
              ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }
            `}
          >
            <span className='mr-2'>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabNavigation;
