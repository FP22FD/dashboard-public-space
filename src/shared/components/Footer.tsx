function Footer() {
  return (
    <footer
      className='col-span-12 row-start-3 mt-20 overflow-y-auto bg-typography-primary-black'
      role='contentinfo'
      aria-label='Footer section'
    >
      <div className='flex flex-col items-center text-typography-primary-white'>
        <div className='flex flex-col items-center p-4 text-center font-medium'>
          <p className='mb-1 text-xs'>
            &copy; 2025 Public Space. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
