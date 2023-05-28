const express = require("express");
const ctrl = require("../../controllers/products");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { addProductSchema } = require("../../schemas");

const router = express.Router();

// AddProduct
router.post(
  "/add/",
  authenticate,
  upload.fields([
    { name: "coverImg", maxCount: 1 },
    { name: "gallery", maxCount: 15 },
  ]),
  validateBody(addProductSchema),
  ctrlWrapper(ctrl.addProduct)
);

// GetProducts
router.get("/", ctrlWrapper(ctrl.getProducts));

module.exports = router;
