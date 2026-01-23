const Footer = () => {
  return (
    <footer className='bg-gray-50 border-t border-gray-200 mt-12'>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0'>
            <h2 className='text-lg font-bold text-gray-800'>HashRite.com</h2>
            <p className='text-sm text-gray-600'>
              Cryptographic File Integrity Verification SaaS
            </p>
          </div>
          <div className='flex space-x-6'>
            <a href='#' className='text-gray-600 hover:text-blue-600 text-sm'>
              Privacy
            </a>
            <a href='#' className='text-gray-600 hover:text-blue-600 text-sm'>
              Terms
            </a>
            <a href='#' className='text-gray-600 hover:text-blue-600 text-sm'>
              API Docs
            </a>
            <a
              href='https://github.com/ozeydi/hashrite-sass'
              className='text-gray-600 hover:text-blue-600 text-sm'
            >
              GitHub
            </a>
          </div>
        </div>
        <div className='mt-6 pt-6 border-t border-gray-300 text-center'>
          <p className='text-xs text-gray-500'>
            © {new Date().getFullYear()} HashRite.com. All processing happens
            locally in your browser.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
