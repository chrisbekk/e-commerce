import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export const Root = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
