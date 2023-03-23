const { User } = require("../schemas/user");

const addUser = ({ ...data }) => {
  return User.create({
    ...data,
  });
};

module.exports = addUser;
