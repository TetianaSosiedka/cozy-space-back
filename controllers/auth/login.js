const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { RequestError } = require("../../helpers");

const service = require("../../service/users");

const login = async (req, res) => {
  const { SECRET_KEY } = process.env;

  const { password, email } = req.body;

  const user = await service.findUser(email);
  if (!user) {
    throw RequestError(401, "Email or password is wrong");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw RequestError(401, "Email or password is wrong");
  }
  // if (!user.verify) {
  //   throw RequestError(401, "Email not farify");
  // }

  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

  await service.loginUser(user._id, token);

  res.status(200).json({
    email: user.email,
    subscription: user.subscription,
    token: token,
  });
};

module.exports = login;
