import React from 'react';
import Header from './Components/Header.jsx'; 
import Footer from './Components/Footer.jsx';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
