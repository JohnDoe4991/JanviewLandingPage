import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const OAuth2 = google.auth.OAuth2;

// Create OAuth2 client
const oauth2Client = new OAuth2(
    process.env.GMAIL_CLIENT_ID, // ClientID
    process.env.GMAIL_CLIENT_SECRET, // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
);

// Set credentials for the OAuth2 client
oauth2Client.setCredentials({
    refresh_token: process.env.GMAIL_REFRESH_TOKEN, // Refresh Token
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        try {
            const accessToken = await oauth2Client.getAccessToken(); // Get access token

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: process.env.EMAIL_USER,
                    clientId: process.env.GMAIL_CLIENT_ID,
                    clientSecret: process.env.GMAIL_CLIENT_SECRET,
                    refreshToken: process.env.GMAIL_REFRESH_TOKEN,
                    accessToken: accessToken.token,
                },
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.RECEIVER_EMAIL,
                replyTo: email,
                subject: `New message from ${name}`,
                text: `You have a new message from ${name} (${email}):\n\n${message}`,
            };

            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Error sending email.' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
