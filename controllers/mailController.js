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
        })
        .catch((error) => {
          console.error(error)
        } 
    )
}