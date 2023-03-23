const { RequestError, sendEmail, templateEmail } = require("../../helpers");
const service = require("../../service/users");

const resendVerify = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw RequestError(400, "Missing required field email");
  }

  const { verify, verificationToken } = await service.findUser(email);

  if (verify) {
    throw RequestError(400, "Verification has already been passed");
  }

  const verifyEmail = templateEmail(verificationToken, email);

  await sendEmail(verifyEmail);

  res.status(200).json({
    message: "Verification email sent",
  });
};

module.exports = resendVerify;
