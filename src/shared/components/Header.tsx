import { Link } from 'react-router-dom';
import { PiCaretDown } from 'react-icons/pi';
import { PiBell } from 'react-icons/pi';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
  // 1️⃣ Create variables and destructure i18n and translation function
  const { t, i18n } = useTranslation(); //
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [language, setLanguage] = useState('English'); // Change the language NOT dynamically

  // 2️⃣ Create function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(true);
  };

  // 3️⃣  Create function to change the language and close the dropdown
  const toggleLanguage = (lang: string) => {
    // setLanguage(lang); // Change the language NOT dynamically
    i18n.changeLanguage(lang); // Change the language dynamically
    setIsDropdownOpen(false);
  };

  return (
    <header className='fixed z-40 col-span-12 row-start-1 w-full bg-typography-primary-white'>
      <nav
        className='border-secondary flex w-full border-b py-5'
        aria-label='Main navigation'
      >
        <div className='mx-12 flex w-full items-center justify-between'>
          <Link to='/' aria-label='Go to homepage'>
            <span className='h-7 w-auto text-2xl font-extrabold'>
              Public Space
            </span>
          </Link>

          <div className='hidden items-center space-x-4 md:flex'>
            <div className='relative flex space-x-8'>
              {/* dropdown  */}
              <div className='relative flex space-x-4 text-typography-primary-grey'>
                <button
                  type='button'
                  aria-label='Show language options'
                  className='flex items-center space-x-1'
                  onClick={toggleDropdown}
                >
                  {/* <p>{t('language')}</p>  Change the language NOT dynamically*/}

                  {/* Change the language dynamically*/}
                  <p>{i18n.language === 'en' ? 'English' : 'Norsk'}</p>

                  <PiCaretDown className='h-6 w-6' />
                </button>

                {isDropdownOpen && (
                  <div className='absolute left-0 top-8 w-32 rounded-lg border bg-white shadow-lg'>
                    <button
                      className='block w-full px-4 py-2 text-left hover:bg-gray-100'
                      onClick={() => toggleLanguage('en')} // Call function to hange the language dynamically
                    >
                      {t('English')}
                    </button>
                    <button
                      className='block w-full px-4 py-2 text-left hover:bg-gray-100'
                      onClick={() => toggleLanguage('no')} // Call function to change the language dynamically
                    >
                      {t('Norsk')}
                    </button>
                  </div>
                )}
              </div>
              {/* fine  */}

              <div className='flex items-center'>
                <div
                  role='separator'
                  className='mr-3 h-full border-l border-neutral-dark'
                ></div>
                <button className='relative'>
                  <PiBell
                    className='h-6 w-6 text-typography-primary-grey'
                    aria-label='Notifications'
                    role='button'
                  />
                  <span className='absolute -right-1 -top-2 h-4 w-4 rounded-full bg-accent-lilac text-center text-xs text-typography-primary-black'>
                    1
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
