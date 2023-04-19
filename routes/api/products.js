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
  upload.single("coverImg"),
  validateBody(addProductSchema),
  ctrlWrapper(ctrl.addProduct)
);

module.exports = router;
