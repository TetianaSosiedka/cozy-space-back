const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const { RequestError } = require("../../helpers");
const { SECRET_KEY } = process.env;

const register = async (req, res) => {
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
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }
  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be at least 6 characters long");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const result = await User.create({
    email,
    password: hashPassword,
    subscription,
    name,
    surname,
    phone,
    country,
    region,
    city,
    index,
    post,
  });

  const payload = {
    id: result._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
  await User.findByIdAndUpdate(result._id, { token });

  res.status(201).json({
    user: {
      // id: result._id,
      email: result.email,
      name: result.name,
      subscription: result.subscription,
    },
    token,
  });
};

module.exports = register;
