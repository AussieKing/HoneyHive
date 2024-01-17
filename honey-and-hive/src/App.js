import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // importing the BrowserRouter, Route and Routes components from react-router-dom
import Layout from './components/Layout';
import About from './components/About'; // importing the About component
import Projects from './components/Projects'; // importing the Projects component
import Services from './components/Services';   // importing the Services component
import Main from './components/Main'; // importing the Home component
import ContactForm from './components/ContactForm'; //! importing the ContactForm component
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const handleContactSubmit = (contactMessage) => {
        // Handle contact form submission here
        alert('Message Sent!');
    }

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<ContactForm onSubmitContact={handleContactSubmit} />} /> {/* //! passing the handleContactSubmit function as a prop to the ContactForm component */}
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
