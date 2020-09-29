const sgMail = require("@sendgrid/mail");

const sendGridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendGridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "aviralpandey003@gmail.com",
    subject: "Thanks for joining in",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "aviralpandey003@gmail.com",
    subject: `Goodbye ${name}`,
    html: `<h1>Hi ${name}</h1>
          <p>We bid you goodbye.:( </p>
          <p style="color:red;">But we would love to hear from you that what better could we have done to keep you onboarded.</p>
          <p>Thankyou so much for being part of our app.</p>
          <p>Hope you have a great life ahead.</p>`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendGoodbyeEmail,
};
