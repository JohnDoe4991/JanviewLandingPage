import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        try {
            // Set up Nodemailer transport with basic authentication
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,  // Your Gmail address
                    pass: process.env.EMAIL_PASSWORD  // Your Gmail app password
                },
            });

            // Email options
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.RECEIVER_EMAIL, 
                replyTo: email,
                subject: `New message from ${name}`,
                text: `You have a new message from ${name} (${email}):\n\n${message}`,
            };

            // Send the email
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
