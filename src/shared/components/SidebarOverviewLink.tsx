import { PiHouseLine } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';

export const SidebarOverviewLink = () => {
  return (
    <NavLink
      to='/'
      className='relative flex items-center text-typography-primary-grey'
    >
      {({ isActive }) => (
        <div
          className={`relative flex w-full items-center space-x-3 rounded-lg p-3 hover:bg-main-green ${isActive ? 'bg-main-lightGreen font-semibold text-status-success-green hover:bg-main-green' : 'hover:bg-neutral-lighter'}`}
        >
          {/* Left indicator that turns green when active */}
          <div
            className={`absolute bottom-0 left-0 top-0 w-1.5 rounded-l-lg transition-all duration-300 ${
              isActive ? 'bg-status-success-green' : 'bg-transparent'
            }`}
          ></div>

          <PiHouseLine className='h-5 w-5' />
          <span className='transition-all duration-300 hover:no-underline'>
            Overview
          </span>
        </div>
      )}
    </NavLink>
  );
};
