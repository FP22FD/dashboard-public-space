import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './shared/components/Layout';
import PageNotFound from './shared/components/NotFound';
import { ErrorPage } from './shared/components/ErrorPage';
import ClientPage from './pages/dashboard/ClientPage';
import ClientBrandPage from './pages/dashboard/ClientBrandPage';
import Overview from './pages/dashboard/components/Overview';

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Overview />,
        },
        {
          path: '/client/:clientid',
          element: <ClientPage />,
        },
        {
          path: '/client/:clientid/brand/:brandid',
          element: <ClientBrandPage />,
        },
      ],
    },
    {
      path: '*',
      element: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
