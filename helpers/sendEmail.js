const sgMail = require("@sendgrid/mail");

const sendEmail = async (msg) => {
  const { SENDGRID_API_KEY, SEND_MAIL } = process.env;

  sgMail.setApiKey(SENDGRID_API_KEY);

  await sgMail.send({ ...msg, from: SEND_MAIL });

  return true;
};

module.exports = sendEmail;
