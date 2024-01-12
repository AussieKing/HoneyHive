import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main> {/* This line renders the content passed to Layout */}
            <Footer />
        </>
    );
};

export default Layout;

