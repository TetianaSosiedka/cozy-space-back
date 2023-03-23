const { User } = require("../schemas/user");

const verifyUser = (id) => {
  return User.findByIdAndUpdate(id, { verificationToken: null, verify: true });
};

module.exports = verifyUser;
