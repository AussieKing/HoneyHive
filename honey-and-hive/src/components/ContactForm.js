import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = ({ onSubmitContact }) => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let formErrors = {};
        let valid = true;

        // Name validation
        if (!contact.name) {
            formErrors.name = 'Name is required';
            valid = false;
        }

        // Email validation
        if (!contact.email) {
            formErrors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(contact.email)) {
            formErrors.email = 'Email is not valid';
            valid = false;
        }

        // Message validation
        if (!contact.message) {
            formErrors.message = 'Message is required';
            valid = false;
        }

        setErrors(formErrors);
        return valid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            onSubmitContact(contact);
            setContact({ name: '', email: '', message: '' });
            // Here we can also set a state to show a success message
        }
    };

    return (
        <div>
            <h1>Get in Touch</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="name" 
                        value={contact.name} 
                        onChange={handleChange} 
                        isInvalid={!!errors.name} 
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        name="email" 
                        value={contact.email} 
                        onChange={handleChange} 
                        isInvalid={!!errors.email} 
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        name="message" 
                        value={contact.message} 
                        onChange={handleChange} 
                        isInvalid={!!errors.message} 
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default ContactForm;
