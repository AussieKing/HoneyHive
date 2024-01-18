import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap'; // importing the Container component from react-bootstrap

const Layout = ({ children, useContainer }) => {
    return (
      <>
        <Header title='Honey & Hive Design'/>
        <main>
          {useContainer ? <Container>{children}</Container> : children}
        </main>
        <Footer />
      </>
    );
  };
  
export default Layout;
