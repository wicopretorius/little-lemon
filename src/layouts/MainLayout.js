import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const MainLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default MainLayout;
