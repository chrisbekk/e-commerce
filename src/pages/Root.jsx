import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export const Root = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
