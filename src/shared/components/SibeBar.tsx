import { useState } from 'react';
import { load } from '../../data/api-client';
import { SidebarSettings } from './SidebarSettings';
import { SidebarClientLinks } from './SidebarClientLinks';
import { SidebarOverviewLink } from './SidebarOverviewLink';

function Sidebar() {
  const data = load();

  const user = {
    name: 'Lars Olsen',
    avatar: '/avatar-1.jpg',
  };

  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleDropdown = (clientId: number) => {
    setOpenDropdowns((prevState) => {
      if (prevState[clientId]) {
        return { ...prevState, [clientId]: false };
      } else {
        return { ...prevState, [clientId]: true };
      }
    });
  };

  return (
    <>
      <div className='mb-6 flex items-center space-x-2 px-4 py-8'>
        <div className='h-12 w-12 overflow-hidden rounded-full bg-neutral-lighter'>
          {user.avatar ? (
            <img
              src={user.avatar}
              alt='Profile Avatar'
              className='h-full w-full object-cover'
            />
          ) : (
            <span
              className='flex h-full w-full items-center justify-center text-lg font-bold text-typography-primary-grey'
              aria-label='Guest user avatar'
            >
              ?
            </span>
          )}
        </div>
        <div className='text-md flex flex-col'>
          <h3 className='text-lg font-semibold text-typography-primary-black'>
            {user.name}
          </h3>
          <p className='text-sm text-typography-primary-grey'>Employee</p>
        </div>
      </div>
      <div role='separator' className='mb-12 border-t'></div>

      <SidebarOverviewLink />

      {data.map((client) => (
        <SidebarClientLinks
          key={client.id}
          client={client}
          openDropdowns={openDropdowns}
          toggleDropdown={toggleDropdown}
        />
      ))}

      <div role='separator' className='my-12 border-t'></div>

      <SidebarSettings />
    </>
  );
}

export default Sidebar;
