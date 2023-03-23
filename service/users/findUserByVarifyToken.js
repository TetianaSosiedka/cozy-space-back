const { User } = require("../schemas/user");

const findUserByVarifyToken = (verificationToken) => {
  return User.findOne({ verificationToken });
};

module.exports = findUserByVarifyToken;
