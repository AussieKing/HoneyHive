const express = require('express');
const Contact = require('../models/Contact'); // Import the Contact model
const sendEmail = require('../../services/emailService'); // Import the email service

const router = express.Router();

// Route for form submission
router.post('/submit-form', async (req, res) => {
  const { name, email, location, budget, projectType, startDate, message } = req.body;

  // Save to MongoDB database
  const newContact = new Contact({ name, email, location, budget, projectType, startDate, message });
  try {
    await newContact.save();
    console.log('Contact saved to database');

    // Prepare email body
    const emailBody = `You have received a new message from ${email}:\nCLIENT'S NAME: ${name}\nLOCATION: ${location}\nBUDGET: ${budget}\nTYPE OF PROJECT: ${projectType}\nPROPOSED START DATE: ${startDate}\nMESSAGE: ${message}`;

    // Send email
    await sendEmail({
      to: process.env.EMAIL_RECIPIENT,
      subject: `New Contact from ${name}`,
      text: emailBody
    });

    res.status(200).send("Form submitted and email sent successfully");
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send("Error processing your request");
  }
});

module.exports = router;
