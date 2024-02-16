const nodemailer = require('nodemailer');

async function sendEmail({ to, subject, text }) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS 
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw error;
  }
}

module.exports = sendEmail;

// const { google } = require('googleapis');

// const oauth2Client = new google.auth.OAuth2(
//   process.env.CLIENT_ID,
//   process.env.CLIENT_SECRET,
//   process.env.GOOGLE_REDIRECT_URI
// );

// oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

// async function sendEmail({ to, subject, text }) {
//   try {
//     const accessToken = await oauth2Client.getAccessToken();

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         type: 'OAuth2',
//         user: process.env.EMAIL_USER,
//         accessToken: accessToken.token,
//         clientId: process.env.CLIENT_ID,
//         clientSecret: process.env.CLIENT_SECRET,
//         refreshToken: process.env.REFRESH_TOKEN
//       }
//     });

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to,
//       subject,
//       text
//     };

//     await transporter.sendMail(mailOptions);
//   } catch (error) {
//     throw error;
//   }
// }

// module.exports = sendEmail;