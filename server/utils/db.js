require("dotenv").config();


const mongoose = require("mongoose");

const keys = require("../config/keys");
const { database } = keys;

const setupDB = async () => {
  try {
    // Connect to MongoDB
    mongoose.set("useCreateIndex", true);
    mongoose
      .connect(database.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
      .then(() => console.log(`MongoDB Connected!`))
      .catch((err) => console.log(err));
  } catch (error) {
    return null;
  }
};

module.exports = setupDB;
