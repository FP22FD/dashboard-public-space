import { PiMagnifyingGlass } from 'react-icons/pi';

function Searchbar() {
  return (
    <div className='flex items-center space-x-4 rounded-lg p-4'>
      <div className='relative flex-1'>
        <label htmlFor='search-input' className='sr-only'>
          Search campaigns
        </label>
        <input
          id='search-input'
          type='text'
          placeholder='Search...'
          className='w-full rounded-lg border bg-neutral-lighter py-2 pl-10 pr-4 focus:outline-none'
        />
        <span className='absolute left-3 top-1/2 -translate-y-1/2 transform text-typography-primary-grey'>
          <PiMagnifyingGlass className='h-5 w-5' />
        </span>
      </div>

      <div>
        <label htmlFor='status-select' className='sr-only'>
          Filter campaigns by status
        </label>
        <select className='rounded-lg border bg-white px-4 py-2 text-typography-primary-grey'>
          <option value='Active'>Active</option>
          <option value='Inactive'>Inactive</option>
        </select>
      </div>
    </div>
  );
}

export default Searchbar;
