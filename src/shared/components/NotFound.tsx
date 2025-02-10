import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className='mt-28 flex h-screen w-full flex-col items-center'>
      <h1 className='text-primary-dark-blue text-3xl font-semibold'>
        Oops! You seem to be lost.
      </h1>
      <Link
        className='hover:text-typography-primary-grey'
        to='/client/:clientid'
      >
        Go to Dashboard
      </Link>
    </div>
  );
}

export default PageNotFound;
