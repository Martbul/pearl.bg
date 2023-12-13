const Ad = require("../models/Ads");

exports.create = async (adData) => {
  adData.likes = 0;
  adData.likedBy = Array;
  const ad = await Ad.create(adData);
  console.log(ad);
  return ad;
};
