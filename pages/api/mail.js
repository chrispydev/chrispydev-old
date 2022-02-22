export default function handler(req, res) {
  const nodemailer = require('nodemailer');
  const mailGun = require('nodemailer-mailgun-transport');
  require('dotenv').config();

  const auth = {
    auth: {
      api_key: process.env.API_KEY || 'MAIL_GUN_API_KEY',
      domain: process.env.DOMAIN || 'MAIL_GUN_DOMAIN',
    },
  };

  const transporter = nodemailer.createTransport(mailGun(auth));

  const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
      from: email,
      to: 'christianowusu44@gmail.com',
      subject,
      text,
    };

    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        return cb(err, null);
      }
      return cb(null, data);
    });
  };
  if (req.method === 'POST') {
    // let message;
    try {
      const { subject, email, text } = req.body;
      sendMail(email, subject, text, function (err, data) {
        if (err) {
          // message = res.status;
          return res
            .status(500)
            .json({ message: err.message || 'Internal Error' });
        }
        // message = 'Email sent!!!!!';
        return res.json({ message: 'Email sent!!!!!' });
      });

      // return res.status(200).json({ message: 'Email sent!!!!!' });
    } catch (err) {
      return res.status(500).json({ message: err.message || 'Internal Error' });
    }
  } else {
    res.status(200).json({ name: 'John Doe' });
  }
}
