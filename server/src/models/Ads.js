const mongoose = require("mongoose");

const adsSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "the NAME of the order is required"],
    validate: {
      validator: function (value) {
        return /^[a-zA-Z]+ [a-zA-Z]+$/.test(value);
      },
      message: "please enter a correct name(exp: David Gonzalez))",
    },
  },
  article: { type: String, required: [true, "the order is required"] },
  description: { type: String, required: [true, "the order is required"] },
  address: {
    type: String,
    required: [true, "the address for the order is required"],
  },
  images:{ type: String},
  likes:{
    type: Number,
  },
  likedBy:{
    type:Array
  },
 
  _ownerEmail: { type: String },
});


const Ad = mongoose.model("Ads", adsSchema);

module.exports = Ad;
