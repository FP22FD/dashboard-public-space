import { PiCaretDown, PiExport, PiGearSix, PiQuestion } from 'react-icons/pi';

export const SidebarSettings = () => {
  return (
    <>
      <div className='grid w-full grid-cols-1 gap-8 px-3'>
        <div className='grid w-full grid-cols-1 gap-6'>
          <div className='flex w-full justify-between text-typography-primary-grey'>
            <div className='flex items-center space-x-6'>
              <PiGearSix className='h-5 w-5' />
              <span className='transition-all duration-300 hover:no-underline'>
                Settings
              </span>
            </div>
            <button type='button' aria-label='Show settings options'>
              <PiCaretDown className='h-4 w-4' />
            </button>
          </div>

          <div className='flex w-full justify-between text-typography-primary-grey'>
            <div className='flex items-center space-x-6'>
              <PiQuestion className='h-5 w-5' />
              <span className='transition-all duration-300 hover:no-underline'>
                Help
              </span>
            </div>
            <button type='button' aria-label='Show help options'>
              <PiCaretDown className='h-4 w-4' />
            </button>
          </div>

          <div className='flex w-full items-center justify-between text-typography-primary-grey'>
            <div className='flex items-center space-x-3'>
              <PiExport className='h-5 w-5 rotate-[-90deg]' />
              <button
                onClick={() => console.log('Log out clicked')}
                className='flex items-center space-x-3 rounded-lg p-3 text-typography-primary-grey transition-all duration-300 hover:bg-neutral-lighter'
                aria-label='Log out'
              >
                <span className='transition-all duration-300 hover:no-underline'>
                  Log out
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
