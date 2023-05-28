const multer = require("multer");
const path = require("path");

// Multer config
module.exports = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, path.join(__dirname, "../"));
      }
      if (file.mimetype === "video/mp4") {
        cb(null, path.join(__dirname, "../"));
      } else {
        cb =
          ({
            message: "Unsupported File Format",
          },
          false);
      }
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});
