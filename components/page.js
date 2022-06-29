import React from 'react';
import Nav from './nav';
import Footer from './footer';

function Page ({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Page;