const { User } = require("../schemas/user");

const loginUser = (id, token) => {
  return User.findByIdAndUpdate(id, { token });
};

module.exports = loginUser;
