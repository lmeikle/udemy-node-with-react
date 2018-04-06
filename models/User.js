const mongoose = require("mongoose");
//const { db } = require("../index");
const { Schema } = mongoose; // same as const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleID: String
});

// mongoose won't overwrite schema's if it already exists
mongoose.model("users", userSchema);
//db.model("users", userSchema);
