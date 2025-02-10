import { NavLink } from 'react-router-dom';
import { Client } from '../../data/api-client';
import { PiCaretDown, PiUser } from 'react-icons/pi';

type ClientLinksProps = {
  client: Client;
  openDropdowns: { [key: number]: boolean };
  toggleDropdown: (clientId: number) => void;
};

export const SidebarClientLinks = ({
  client,
  openDropdowns,
  toggleDropdown,
}: ClientLinksProps) => {
  return (
    <>
      <div key={client.id}>
        {/* Client Link with Dropdown Toggle */}
        <div className='relative mt-2'>
          <NavLink
            to={`/client/${client.id}`}
            className={({ isActive }) =>
              `relative flex items-center space-x-3 rounded-lg p-3 ${
                isActive
                  ? 'bg-main-lightGreen font-semibold text-status-success-green hover:bg-main-green'
                  : 'text-typography-primary-grey hover:bg-neutral-lighter'
              }`
            }
            onClick={() => toggleDropdown(client.id)}
          >
            {({ isActive }) => (
              <>
                <div
                  className={`absolute bottom-0 left-0 top-0 w-1.5 ${
                    isActive
                      ? 'rounded-l-lg bg-status-success-green'
                      : 'bg-transparent'
                  }`}
                ></div>

                <div className='flex w-full items-center justify-between'>
                  <div className='flex items-center space-x-3'>
                    <PiUser className='h-5 w-5' />
                    <span>{client.name}</span>
                  </div>
                  <PiCaretDown className='h-5 w-5' />
                </div>
              </>
            )}
          </NavLink>

          {/* Dropdown for Brands (visible only when isDropdownOpen is true) */}
          {openDropdowns[client.id] && (
            <div className='pl-6 pt-2'>
              {client.brands.map((brand) => (
                <NavLink
                  key={`${client.id}-${brand.id}`}
                  to={`/client/${client.id}/brand/${brand.id}`}
                  className={({ isActive }) =>
                    `relative flex items-center space-x-3 rounded-lg p-3 hover:bg-neutral-lighter ${
                      isActive
                        ? 'bg-neutral-lighter font-semibold text-typography-primary-grey'
                        : 'font-normal text-typography-primary-grey'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div
                        className={`absolute bottom-0 left-0 top-0 w-1.5 ${
                          isActive
                            ? 'rounded-l bg-neutral-light'
                            : 'bg-transparent'
                        }`}
                      ></div>
                      <span>{brand.name}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
