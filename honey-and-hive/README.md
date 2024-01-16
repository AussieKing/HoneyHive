# PROJECT DESCRIPTION
We are building a website for "Honey and Hive", an interior design firm. The website aims to showcase the firm's portfolio, services, and allow visitors to contact the firm through an integrated contact form.

# CHALLENGES FACED
- React Components & Styling: Implementing and styling various React components to create a visually appealing user interface.
- Responsive Design: Ensuring the website is responsive and accessible on various devices.
- CORS error when trying to send emails from the backend. We had to use a workaround to get around this. We used a library called cors-anywhere to bypass the CORS error. We then used the bypassed URL to send emails.
- OAuth2.0 with Google. Integrating email capabilities to send messages from the contact form using Nodemailer and Google OAuth2 was rather time consuming, due to some authentication issues. By bypassing it using the App password (setup 2FA), we were able to successfully send emails.
- We had to use a workaround to get the refresh token from Google. We had to use a different library (googleapis) to get the refresh token. We then used the refresh token to get the access token. We then used the access token to send emails.

# TECHNOLOGIES USED
- React.js: For building the user interface.
- React Bootstrap: For responsive design and styling components.
- Node.js & Express: For backend server setup.
- Nodemailer: For sending emails from the server.
- Google OAuth2: For secure authentication in email services.
- Axios: For making HTTP requests from the frontend.
- dotenv: For managing environment variables securely.
- Google APIs: Specifically Gmail API for the email functionality.
- CORS (Cross-Origin Resource Sharing): To handle resource sharing between different domains.
- Concurrently: To run multiple npm scripts concurrently.
- Browser DevTools and Insomnia: For testing and debugging the application.
- Google OAuth2.0: For secure authentication in email services.
- Google Console API: For Gmail API and OAuth2.0. 
- Body-parser: Middleware to parse incoming request bodies in a middleware before your handlers.
- google-auth-library: For implementing Google authentication in Node.js.
- express-session: Middleware for creating sessions.
- Insomnia/Postman (not an npm package): Used for testing API endpoints.

# TODO
- Before production, change the Authorized redirect URIs in the Google API Console to the production URL (https://www.honeyandhiveinteriors.com/auth/google/callback . In https://console.cloud.google.com/apis/credentials
)
- Change the refresh token in the .env file to the production refresh token (and store in a database)
- Change the client ID and client secret in the .env file to the production client ID and client secret (and store in a database)
- Change the password in the .env file to the production password (and store in a database)
- Change the email in the .env file to the production email (and store in a database)
