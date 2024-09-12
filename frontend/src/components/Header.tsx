import React from 'react';
import Head from 'next/head';

const HeadComponent: React.FC = () => {
  return (
    <Head>
        <title>Your E-commerce Store</title>
        <meta name="description" content="Your one-stop shop for all your needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  );
};

export default HeadComponent;