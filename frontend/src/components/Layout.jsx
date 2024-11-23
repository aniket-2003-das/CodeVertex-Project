// import React from 'react';
import Header from '../sections/Header'; 
import Footer from '../sections/Footer';
import { twMerge } from 'tailwind-merge' 

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
<div className={twMerge( "bg-black text-white antialiased ") }>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;




