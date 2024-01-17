import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap'; // importing the Container component from react-bootstrap

const Layout = ({ children }) => {
    return (
        <>
            <Header title='Honey & Hive Design'/>
            <main>
                <Container>{children}</Container> {/* This line renders the Container */}
            </main> 
            <Footer />
        </>
    );
};

export default Layout;