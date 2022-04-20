const sgMail = require('@sendgrid/mail');
require('dotenv').config();
'use-strict'

//send email
exports.sendEmail = (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
        to: req.body.email, // Change to your recipient
        from: 'bandagift42@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      }
      sgMail
        .send(msg)
        .then(() => {
          res.status(200).json({
            message: "Email sent successfully"
          })
        })
        .catch((error) => {
          res.status(500).json({
            message: "Error sending email"
          })
        } 
    )
}

exports.getInTouch = (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    name: req.body.name,
    to: 'bandagift42@gmail.com',
    from: 'bandagift42@gmail.com',
    html: `${req.body.name} is interested in ${req.body.subject} with the message ${req.body.message}. This is the inquires email ${req.body.email}`,
    text: req.body.email,
    subject: req.body.subject
  };

  sgMail
        .send(msg)
        .then(() => {
          res.status(200).json({
            message: "Email sent successfully"
          })
        })
        .catch((error) => {
        res.status(500).json({
          message: "Error sending email"
        })
      } 
  )
 
}

