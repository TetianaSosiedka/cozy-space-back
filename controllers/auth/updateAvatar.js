const fs = require("fs").promises;
const path = require("path");

const service = require("../../service/users");
const { resize } = require("../../middlewares");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updataAvatar = async (req, res) => {
  try {
    const { _id: id } = req.user;
    const { path: tempUpload, originalname } = req.file;

    const extention = originalname.split(".").pop();
    const filename = `${id}.${extention}`;

    const resultUpload = path.join(avatarDir, filename);

    await resize(tempUpload);

    await fs.rename(tempUpload, resultUpload);

    const avatarURL = path.join("avatar", filename);

    const result = await service.updataAvatarUser(id, avatarURL);

    res.json({
      avatarURL: result.avatarURL,
    });
  } catch (error) {
    await fs.unlink(req.file.path);
    throw error;
  }
};

module.exports = updataAvatar;
