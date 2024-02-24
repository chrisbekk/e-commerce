import React from 'react';
import ReactDOM from 'react-dom/client';
import { ShopCartProvider } from './context/ShopCartContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopCartProvider>
      <RouterProvider router={router} />
    </ShopCartProvider>
  </React.StrictMode>,
);
