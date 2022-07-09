import React from 'react';
import Nav from './nav';
import Footer from './footer';
import Head from 'next/head';

function Page({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Web site created using create-react-app" />
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Page;