const express = require("express");
const router = express.Router();
// const express = require("express");

const SignIn = require("../models/userSignIn");
router.get("/login", async (req, res) => {
  console.log("auth routes getting executed");
  try {
    const SignInUser = new SignIn({
      email: "ale@ale.com",
      password: "password2345",
    });
    const SignInUser2 = await SignInUser.save();
    console.log(SignInUser);
    !SignInUser2 && res.status(404).send("Not created");
    res.status(200).send("User created");
  } catch (err) {
    res.status(500).send("bad request");
  }
});

module.exports = router;
