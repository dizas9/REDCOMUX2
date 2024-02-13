const Mongoose = require("mongoose");

const { Schema } = Mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastNamestName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = Mongoose.model("User", userSchema);
