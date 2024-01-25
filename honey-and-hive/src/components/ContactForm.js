import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios"; // import axios for making HTTP requests
import "./ContactForm.css";
import contactBottomImg from '../assets/contact-bottom.jpg';


const ContactForm = ({ onSubmitContact }) => {
  //! Updated hook to track the new fields
  const [contact, setContact] = useState({
    name: "",
    email: "",
    location: "",
    budget: "",
    projectType: "",
    startDate: "",
    message: "",
  });

  //! Updated hook to track the new fields
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    location: "",
    budget: "",
    projectType: "",
    startDate: "",
    message: "",
  });

  // State to track whether a submission has been made
  const [submitted, setSubmitted] = useState(false);

  // Function to validate individual fields
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return !value ? "Name is required" : "";
      case "email":
        if (!value) {
          return "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          return "Email is not valid";
        }
        return "";
      case "message":
        return !value ? "Message is required" : "";
      default:
        return "";
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

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost:3001/submit-form",
          contact
        );
        console.log(response.data); // logs the response data
        setContact({ name: "", email: "", message: "" }); // resets the form
        setSubmitted(true); // sets the submitted state to true
      } catch (error) {
        console.error("There was an error in submitting the form: ", error);
      }
    }
  };

  // Style objects for form inputs and submit button
  const inputStyle = {
    backgroundColor: "white",
    borderColor: "#BB9C71",
    color: "#616060",
  };

  const buttonStyle = {
    backgroundColor: "#BB9C71",
    borderColor: "#BB9C71",
    color: "white",
  };

  return (
    <div className="contact-container">
      {/* Success message */}
      {submitted && (
        <div className="alert-container">
          <div className="alert alert-success" role="alert">
            Message sent!
          </div>
        </div>
      )}

      {/* Left side with description and additional contact info */}
      <div className="contact-info">
        <h1>Get In Touch</h1>
        <p>
          We look forward to chatting about your project.
          <br />
          ***Founder's name here***
        </p>
        <div className="additional-info">
          {/* Additional contact details here */}
          <p><strong>GENERAL INQUIRIE</strong>S</p>
          {/* TODO: link to google maps */}
          <p>BRISBANE</p>
          <p>Main Warehouse</p>
          <p>0400 000 000</p>
          <p>hello@myemail.com.au</p>
        </div>
      </div>

      {/* Contact form on the right */}
      <Form onSubmit={handleSubmit} className="contact-form">
        <Form.Group controlId="formName" className="form-group">
          <Form.Label className="label">NAME*</Form.Label>
          <Form.Control
            type="text"
            name="name"
            className="input"
            value={contact.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail" className="form-group">
          <Form.Label className="label">EMAIL*</Form.Label>
          <Form.Control
            type="email"
            name="email"
            className="input"
            value={contact.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        {/* New Location field */}
        <Form.Group controlId="formLocation" className="form-group">
          <Form.Label className="label">LOCATION</Form.Label>
          <Form.Control
            type="text"
            name="location"
            className="input"
            value={contact.location}
            onChange={handleChange}
            isInvalid={!!errors.location}
          />
          <Form.Control.Feedback type="invalid">
            {errors.location}
          </Form.Control.Feedback>
        </Form.Group>

        {/* New Budget field */}
        <Form.Group controlId="formBudget" className="form-group">
          <Form.Label className="label">BUDGET</Form.Label>
          <Form.Control
            type="text"
            name="budget"
            className="input"
            value={contact.budget}
            onChange={handleChange}
            isInvalid={!!errors.budget}
          />
          <Form.Control.Feedback type="invalid">
            {errors.budget}
          </Form.Control.Feedback>
        </Form.Group>

        {/* New Project Type field */}
        <Form.Group controlId="formProjectType" className="form-group">
          <Form.Label className="label">PROJECT TYPE</Form.Label>
          <Form.Control
            type="text"
            name="projectType"
            className="input"
            value={contact.projectType}
            onChange={handleChange}
            isInvalid={!!errors.projectType}
          />
          <Form.Control.Feedback type="invalid">
            {errors.projectType}
          </Form.Control.Feedback>
        </Form.Group>

        {/* New Proposed Start Date field */}
        <Form.Group controlId="formStartDate" className="form-group">
          <Form.Label className="label">PROPOSED START DATE</Form.Label>
          <Form.Control
            type="text"
            name="startDate"
            className="input"
            value={contact.startDate}
            onChange={handleChange}
            isInvalid={!!errors.startDate}
          />
          <Form.Control.Feedback type="invalid">
            {errors.startDate}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formMessage" className="form-group">
          <Form.Label className="label">MESSAGE*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            className="textarea"
            value={contact.message}
            onChange={handleChange}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Submit button */}
        <Button type="submit" className="submit-button">
          SUBMIT
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
