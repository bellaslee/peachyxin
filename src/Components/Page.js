import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

const Page = () => {
  return (
    <React.Fragment>
      <Nav />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default Page;