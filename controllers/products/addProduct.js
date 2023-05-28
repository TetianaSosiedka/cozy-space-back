const { Product } = require("../../models/product");

const { RequestError } = require("../../helpers");
const cloudinary = require("../../middlewares/cloudinary");

const addProduct = async (req, res) => {
  const cloudinaryImageUploadMethod = async (file) => {
    return new Promise((resolve) => {
      cloudinary.uploader.upload(file, (err, res) => {
        if (err) return res.status(500).send("upload image error");
        resolve({
          res: res.secure_url,
        });
      });
    });
  };

  const galleryUrls = [];
  let coverImgUrl = "";
  const reqFiles = [];
  reqFiles.push(req.files.coverImg, req.files.gallery);
  const files = [].concat(...reqFiles);
  console.log("addProduct  files:", files);

  for (const file of files) {
    const { path, fieldname } = file;

    const newPath = await cloudinaryImageUploadMethod(path);

    if (fieldname === "gallery") {
      galleryUrls.push(newPath);
    }
    if (fieldname === "coverImg") {
      coverImgUrl = newPath;
    }
  }

  const result = await Product.create({
    ...req.body,
    gallery: galleryUrls.map((url) => url.res),
    coverImg: coverImgUrl.res,
  });

  if (!result) {
    throw RequestError(404, "Not found");
  }

  res.status(201).json(result);
};

module.exports = addProduct;
