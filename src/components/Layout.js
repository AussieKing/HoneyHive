import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap'; 
import contactBottomImg from '../assets/contact-bottom.jpg'; 

const Layout = ({ children, useContainer }) => {
  // Determine if the current page is the contact page
  const isContactPage = window.location.pathname === '/contact';

  return (
    <>
      <Header title='Honey & Hive Design'/>
      <main className={isContactPage ? "contact-page" : ""}>
        {useContainer ? <Container>{children}</Container> : children}
        {/* Conditionally render the image only on the contact page */}
        {isContactPage && (
          <div className="contact-bottom-image">
            <img src={contactBottomImg} alt="Decorative" />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
