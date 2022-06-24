const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "email.test.nodejsdv@gmail.com",
    pass: "keyuvhhxoarwlxph",
  },
});
transporter.verify().then(() => {
  console.log("Ready for send emails");
});

module.exports = transporter;
