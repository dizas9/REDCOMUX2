const express = require("express");
const router = express.Router();

const User = require("../../models/user");
const keys = require("../../config/keys");

router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const user = new User({ firstName, lastName, email, password });

    const registeredUser = await user.save();

    res.status(200).json({
      success: true,
      user: {
        firstName: registeredUser.firstName,
        lastName: registeredUser.lastName,
        email: registeredUser.email,
        password: registeredUser.password,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
