import React from 'react';
import { ReactNode } from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Head>
        <title>Portfolio - Your Name</title>
        <meta name="description" content="Professional Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout; 