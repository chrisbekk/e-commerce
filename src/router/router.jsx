import { createBrowserRouter } from 'react-router-dom';

// Pages Import
import { Root } from '../pages/Root';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { ContactPage } from '../pages/ContactPage';
import { ShoppingcartPage } from '../pages/ShoppingcartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ErrorPage } from '../pages/error/ErrorPage';
// Declare router and define routes

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/products/:productId',
        element: <ProductPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/shopping-cart',
        element: <ShoppingcartPage />,
      },
      {
        path: '/checkout',
        element: <CheckoutPage />,
      },
    ],
  },
]);
