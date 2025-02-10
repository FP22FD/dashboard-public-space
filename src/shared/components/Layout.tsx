import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './SibeBar';

function Layout() {
  return (
    <div className='grid min-h-screen grid-cols-12 grid-rows-[min-content_1fr_min-content]'>
      <Header />

      <div className='col-span-12 mx-12 mt-32 flex flex-col justify-between md:flex-row'>
        <aside className='mr-12 w-full border p-4 md:w-3/12'>
          <Sidebar />
        </aside>

        <main className='w-full border md:w-9/12'>
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
