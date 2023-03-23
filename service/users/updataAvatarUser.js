const { User } = require("../schemas/user");

const updataAvatarUser = (id, avatarURL) => {
  return User.findByIdAndUpdate(
    id,
    { avatarURL },
    {
      new: true,
    }
  );
};

module.exports = updataAvatarUser;
