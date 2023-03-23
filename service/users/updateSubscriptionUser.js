const { User } = require("../schemas/user");

const updateSubscriptionUser = (id, body) => {
  return User.findByIdAndUpdate(id, body, {
    new: true,
  });
};

module.exports = updateSubscriptionUser;
