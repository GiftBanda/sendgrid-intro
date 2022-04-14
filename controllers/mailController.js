const sgMail = require('@sendgrid/mail');

//send email
exports.sendEmail = (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || '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');

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
          console.log('Email sent')
          res.status(200).json({
            message: "Email sent successfully"
          })
        })
        .catch((error) => {
          console.error(error)
        } 
    )
}

exports.getInTouch = (req, res) => {
  const messageBody = `${req.body.fullname} enquiry ${req.body.message} ${req.body.whatsappNumber} ${req.body.email}`;
  sendMailInsideSys(
      'bandagift42@gmail.com',
      'New message from the website',
      messageBody
  );
  if (!sgMail.send(messageBody)) return res.status(500).send('Internal server error please try again');

  res.status(201).send('Email sent to admin');
}

const sendMailInsideSys = (email, subject, body) => {

  const message = {
      to: email, // Change to your recipient
      from: 'bandagift42@gmail.com',
      subject: subject,
      text: body,
      // html: '<strong>tsting html format.js</strong>',
  };
  if (!sgMail.send(message)) {
      console.log('failed to send email');
      // return res.status(500).send('Internal server error please try again');
  }

  console.log('email sent to ', email);
  // res.status(201).send('sending email to user');
};