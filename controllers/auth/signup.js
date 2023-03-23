const bcrypt = require("bcryptjs");
// const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const {
  RequestError /* sendEmail, templateEmail */,
} = require("../../helpers");

const service = require("../../service/users");

const signup = async (req, res) => {
  const {
    password,
    email,
    subscription,
    name,
    surname,
    phone,
    country,
    region,
    city,
    index,
    post,
  } = req.body;
  const user = await service.findUser(email);
  if (user) {
    throw RequestError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  // const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();

  const result = await service.addUser({
    password: hashPassword,
    email,
    subscription,
    // avatarURL,
    verificationToken,
    name,
    surname,
    phone,
    country,
    region,
    city,
    index,
    post,
  });

  // const verifyEmail = templateEmail(verificationToken, email);
  // await sendEmail(verifyEmail);

  res.status(201).json({
    email: result.email,
    subscription: result.subscription,
  });
};

module.exports = signup;
