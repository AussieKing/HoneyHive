import React from 'react';
import Layout from './components/Layout';
import ContactForm from './components/ContactForm'; // Renamed for clarity
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const handleContactSubmit = (contactMessage) => {
        // Here we could do something with the contact message, like sending an email
        alert('Message sent!'); // For now, we'll just show an alert
    };

    return (
        <div className='App'>
            <Layout>
                <ContactForm onSubmitContact={handleContactSubmit} />
                {/* Removed the feedback display. If we need to show a success message, we can do it within the ContactForm component. */}
            </Layout>
        </div>
    );
}

export default App;

