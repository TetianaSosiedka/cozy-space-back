const { User } = require("../schemas/user");

const logoutUser = (id) => {
  return User.findByIdAndUpdate(id, { token: null });
};

module.exports = logoutUser;
