const { Schema, model } = require("mongoose");
const { handleSaveErrors } = require("../../helpers");
const Joi = require("joi");

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
    token: {
      type: String,
      default: null,
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

    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleSaveErrors);

const signupShema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
  subscription: Joi.string(),
  name: Joi.string().required(),
  surname: Joi.string().required(),
  phone: Joi.string().required(),
  country: Joi.string(),
  region: Joi.string(),
  city: Joi.string(),
  index: Joi.string(),
  post: Joi.string(),
});

const loginSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
});

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string().valid("customer", "admin"),
});

const verifyEmailSchema = Joi.object({
  email: Joi.string().required(),
});

const schemas = {
  signupShema,
  loginSchema,
  updateSubscriptionSchema,
  verifyEmailSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
