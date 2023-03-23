const { User } = require("../schemas/user");

const findUser = (email) => {
  return User.findOne({ email });
};

module.exports = findUser;
