const router = require("express").Router();

const authRoutes = require("./auth");

//auth route
router.use("/auth", authRoutes);

module.exports = router;
