const { Schema, model } = require("mongoose");

const userSchema = Schema(
  {
    name: {
      type: String,
      require: true,
    },
    account: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    mobile: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
