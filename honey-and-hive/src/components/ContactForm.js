import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'; //! import axios for making HTTP requests

const ContactForm = ({ onSubmitContact }) => {
    // State to hold the form data
    const [contact, setContact] = useState({
        name: '',
        email: '',
        message: '',
    });

     // Initialize the errors state
     const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    // State to track whether a submission has been made
    const [submitted, setSubmitted] = useState(false);

    // Function to validate individual fields
    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                return !value ? 'Name is required' : '';
            case 'email':
                if (!value) {
                    return 'Email is required';
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    return 'Email is not valid';
                }
                return '';
            case 'message':
                return !value ? 'Message is required' : '';
            default:
                return '';
        }
    };

    // Function to validate the entire form
    const handleChange = (e) => {
        const { name, value } = e.target;
        const fieldError = validateField(name, value);
        setErrors({ ...errors, [name]: fieldError });
        setContact({ ...contact, [name]: value });
    };

    // Validate the form before submission
    const validateForm = () => {
        let formIsValid = true;
        let newErrors = {};

        Object.keys(contact).forEach((fieldName) => {
            const fieldError = validateField(fieldName, contact[fieldName]);
            newErrors[fieldName] = fieldError;
            if (fieldError) formIsValid = false;
        });

        setErrors(newErrors);
        return formIsValid;
    };

    //! Modified 
    // We are now using axios to make the POST request
    // introducing an async function to make the POST request
    // if the form is valid, we make the POST request
    // we also use the try catch block to handle errors
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('http://localhost:3001/submit-form', contact);
                console.log(response.data); // logs the response data
                setContact({ name: '', email: '', message: '' }); // resets the form
                setSubmitted(true); // sets the submitted state to true
            } catch (error) {
                console.error('There was an error in submitting the form: ', error);
            }
        }
    };

    // Style objects for form inputs and submit button
    const inputStyle = {
        backgroundColor: 'white',
        borderColor: '#BB9C71',
        color: '#616060',
    };

    const buttonStyle = {
        backgroundColor: '#BB9C71',
        borderColor: '#BB9C71',
        color: 'white',
    };

    return (
        <div>
            {/* Show a success message if the form has been submitted */}
            {submitted && (
                <div className="alert alert-success" role="alert">
                    Message sent!
                </div>
            )}

            {/* Form heading */}
            <h1 style={{ color: '#616060' }}>Get in Touch</h1>

            {/* The Form */}
            <Form onSubmit={handleSubmit}>
                {/* Name input field */}
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="name" 
                        value={contact.name} 
                        onChange={handleChange} 
                        isInvalid={!!errors.name}
                        style={inputStyle} // Apply the input style
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Email input */}
                <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    name="email" 
                    value={contact.email} 
                    onChange={handleChange} 
                    isInvalid={!!errors.email} 
                    style={inputStyle} // Apply the input style
                />
                <Form.Control.Feedback type="invalid">
                    {errors.email}
                </Form.Control.Feedback>
            </Form.Group>

                {/* Message textarea */}
                <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3} 
                    name="message" 
                    value={contact.message} 
                    onChange={handleChange} 
                    isInvalid={!!errors.message}
                    style={inputStyle} // Apply the input style 
                />
                <Form.Control.Feedback type="invalid">
                    {errors.message}
                </Form.Control.Feedback>
            </Form.Group>

                {/* Submit button */}
                <Button variant="primary" type="submit" style={buttonStyle}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default ContactForm;
