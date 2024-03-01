const mongoose = require("mongoose");
const schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const User = new schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", User);
