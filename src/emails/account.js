const sgMail = require("@sendgrid/mail");

const sendGridApikey =
  "";

sgMail.setApiKey(sendGridApikey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "17BCS2406@cuchd.in",
    subject: "Thanks for joining in",
    tetx: `Welcome to the app, ${name}.Let me know how you feel about platform`,
  });
};

module.exports = {
  sendWelcomeEmail,
};
