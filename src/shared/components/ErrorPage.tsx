import { Link } from 'react-router-dom';

export function ErrorPage() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <h1
        className='text-center text-3xl text-typography-primary-black'
        aria-live='assertive'
      >
        An error has occurred.
      </h1>
      <Link
        className='mt-4 hover:text-typography-primary-grey'
        to='/'
        aria-label='Go back to home page'
      >
        Go back to Dashboard
      </Link>
    </div>
  );
}
