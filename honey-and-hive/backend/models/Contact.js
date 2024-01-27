const mongoose = require('mongoose');

//! Defining the schemas below
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  location: String,
  budget: String,
  projectType: String,
  startDate: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
