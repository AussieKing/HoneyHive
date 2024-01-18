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
- Dom React Router: For routing between pages.

# STRUCTURE


# TIMELINE
**Day 1-5 : Create Repo, Contact page and implement Email sending capabilities** [x].

**Day 6-20: Planning and Design** []
- Research and gather inspiration from similar sites [x]
- Create wireframes and mockups for each of the pages: homepage, about, services, projects, and contact. [x]
- Define the site's style guide (color palette, typography, layout principles, etc.). [WIP]

**Day 21-35: Homepage Development**
- HTML structure.
- CSS styling with responsive design.
- Implementing a Bootstrap layout.
- Adding interactive elements with JavaScript/jQuery.

**Day 36-50: About Page**
- Developing the HTML/CSS structure. [x]
- Integrating Handlebars for templating.
- Adding personal touch with JavaScript animations. 
- Ensuring accessibility standards are met.

**Day 51-65: Services Page and Subsections**
- Services page development with React.js components.
- Subsections for interior design and styling.
- Advanced state management with React hooks.

**Day 66-75: Projects Showcase**
- Displaying projects with a responsive grid layout.
- Using a headless CMS or API for project data.
- Creating a dynamic gallery with modal pop-ups for project details.

**Day 76-85: Authentication and User Management**
- Implementing Firebase for user authentication.
- Setting up secure user accounts and session management.
- Handling form submissions securely with Node.js and Express.

**Day 86-95: Backend Integration and Testing**
- Integrating a MongoDB or MySQL database for storing inquiries and bookings.
- Developing RESTful API endpoints for CRUD operations.
- Unit and functional testing of components and backend.

**Day 96-100: Finalization and Launch Preparation**
- Conducting final tests and debugging.
- Preparing documentation and commenting code.
- Setting up continuous integration for deployment.
- Conducting a soft launch to collect feedback.
- Final adjustments and official launch.

# TODO
- Make the website responsive (About page, Services page, Projects page, Contact page)
- Before production, change the Authorized redirect URIs in the Google API Console to the production URL (https://www.honeyandhiveinteriors.com/auth/google/callback . In https://console.cloud.google.com/apis/credentials)
- Change the refresh token in the .env file to the production refresh token (and store in a database)
- Change the client ID and client secret in the .env file to the production client ID and client secret (and store in a database)
- Change the password in the .env file to the production password (and store in a database)
- Change the email in the .env file to the production email (and store in a database)
