const { Schema, model } = require("mongoose");
const { handleSaveErrors } = require("../helpers");

const productSchema = new Schema(
  {
    coverImg: {
      type: String,
    },
    galerry: {
      type: Array,
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    volume: {
      type: Number,
      required: [true, "Volume is required"],
    },
    brand: {
      type: String,
      required: [true, "Brand is required"],
    },
    categorie: {
      type: String,
      required: [true, "Categorie is required"],
    },
    markers: {
      type: Array,
      required: [true, "Markers is required"],
    },
    new: {
      type: Boolean,
    },
    available: {
      type: Boolean,
    },
    shortDescription: {
      type: String,
      required: [true, "ShortDescription is required"],
    },
    fullDescription: {
      type: String,
      required: [true, "FullDescription is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

productSchema.post("save", handleSaveErrors);

const Product = model("product", productSchema);

module.exports = { Product };
