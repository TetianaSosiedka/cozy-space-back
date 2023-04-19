const { Product } = require("../../models/product");

const { RequestError } = require("../../helpers");
const cloudinary = require("../../middlewares/cloudinary");

const addProduct = async (req, res) => {
  // -----------
  try {
    // Upload image to cloudinary
    const product = await cloudinary.uploader.upload(req.file.path);

    // Create new user
    const result = await Product.create({
      ...req.body,
      coverImg: product.secure_url,
    });

    if (!result) {
      throw RequestError(404, "Not found");
    }

    res.status(201).json(result);
  } catch (err) {
    console.log(err);
  }
  // --------------

  // if (req.file) {
  //   // console.log(req.file);
  //   const file = req.file.buffer;
  //   const result = await uploadImage(file, "products");
  //   coverImg = result.secure_url;
  // }

  // const result = await Product.create({
  //   ...req.body,
  //   coverImg,
  // });
};

module.exports = addProduct;
