// react and react-dom
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// react redux
import { Provider } from 'react-redux';
import { store } from './store';

// pages and components
import Home from './Home';
import Customers, { loadCustomers } from './Customers';
import Customer, { loadCustomer } from './Customer';
import CustomerIndex from './CustomerIndex';

// styles
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/customers',
    element: <Customers />,
    loader: loadCustomers,
    children: [
      {
        index: true,
        element: <CustomerIndex />,
      },
      {
        path: ':customerID',
        element: <Customer />,
        loader: loadCustomer,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);