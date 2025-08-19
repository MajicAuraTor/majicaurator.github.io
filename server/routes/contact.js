import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Configure your email transport (use your real email and app password)
    // Configure your email transport for Outlook/Office365
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false, // use TLS
      auth: {
        user: 'jprice@icstars.org', // replace with your company email
        pass: 'Youarethekey12!' // use your email password or app password if required
      }
    });

  const mailOptions = {
    from: email,
    to: 'jprice@icstars.org', // where you want to receive messages
    subject: `New Contact Form Submission from ${name}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
