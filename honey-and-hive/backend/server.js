require("dotenv").config(); // Load environment variables (sensitive data) from .env file
const bodyParser = require("body-parser"); // Import body-parser for parsing request bodies
const nodemailer = require("nodemailer"); // Importing nodemailer for email functionality
const express = require("express"); // Import express for server setup
const cors = require("cors"); // Import cors for cross-origin resource sharing
const { google } = require("googleapis"); // Import googleapis for OAuth2 functionality
const app = express(); // Create an express app
const port = 3001; // Define the port for the server

// Setting up Google OAuth2 client
const CLIENT_ID = process.env.CLIENT_ID; // Google OAuth2 Client ID from .env
const CLIENT_SECRET = process.env.CLIENT_SECRET; // Google OAuth2 Client Secret from .env
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI; // Google OAuth2 Redirect URI from .env
const REFRESH_TOKEN = process.env.REFRESH_TOKEN; // Google OAuth2 Refresh Token from .env

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// Set credentials for the OAuth2 client
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cors()); // Enable CORS

// Configure Nodemailer to use Gmail with OAuth2 authentication
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


app.get("/", (req, res) => {
  res.send("Hello World!"); // Simple response for root route
});

// Route to start the OAuth2 flow
app.get("/auth/google", (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/gmail.send"], // Scope for sending emails
  });
  res.redirect(url); // Redirect user to Google's OAuth 2.0 server
});

// Callback route for Google OAuth2
app.get("/auth/google/callback", async (req, res) => {
  try {
    const { tokens } = await oauth2Client.getToken(req.query.code); // Exchange code for tokens
    oauth2Client.setCredentials(tokens);

    // Tokens received; for production, securely store the refresh token
    console.log("Your refresh token is:", tokens.refresh_token);

    res.redirect("/"); // Redirect user to a success page or back to the main page
  } catch (error) {
    console.error("Error getting tokens:", error);
    res.status(500).send("Authentication failed"); // Send error response
  }
});

// Route for form submission and email sending
app.post("/submit-form", async (req, res) => {
    const { name, email, message } = req.body;
    console.log("Received form submission: ", name, email, message);
  
    // Retrieve a fresh access token
    const accessToken = await oauth2Client.getAccessToken();
    console.log('Access Token:', accessToken.token); // Log the access token
  
    // Email options - use template literals for variables
    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: `New Contact from ${name}`, // Template literal for subject
      text: `You have received a new message from ${email}: ${message}`, // Template literal for text body
      auth: {
        user: process.env.EMAIL_USER,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token, // Include the access token here
      },
    };

    console.log("Sending email...");
  
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).send("Email sent successfully");
      }
    });
});

// Start the server
app.listen(port, () => {
  console.log("Server listening at http://localhost:${port}");
});
