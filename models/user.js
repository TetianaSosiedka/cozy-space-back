const { Schema, model } = require("mongoose");
const { handleSaveErrors } = require("../helpers");

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
    },
    // avatarURL: {
    //   type: String,
    //   required: [true, "Avatar is required"],
    // },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    surname: {
      type: String,
      required: [true, "Surname is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
    },
    country: {
      type: String,
    },
    region: {
      type: String,
    },
    city: {
      type: String,
    },
    index: {
      type: Number,
    },
    post: {
      type: Number,
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleSaveErrors);

const User = model("user", userSchema);

module.exports = User;
