const mongoose = require("mongoose");

const SignInSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const SignIn = mongoose.model("SignIn", SignInSchema);
