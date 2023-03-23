const Jimp = require("jimp");

const resize = async (imgUrl) => {
  await Jimp.read(imgUrl)
    .then((img) => {
      return img.resize(250, 250).write(imgUrl);
    })
    .catch((error) => console.log(error.message));
};

module.exports = resize;
