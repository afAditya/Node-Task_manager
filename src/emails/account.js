const sgMail = require("@sendgrid/mail");

const sendGridApikey =
  "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";

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

// SG.VijUSOHYQbqVClRP - fcYvQ.lfllZdt - oY6EjGEY0NACWf - QcotLiyUv9gCFFTMAy1Q;
