const Ad = require("../models/Ads");

exports.getAll = async () => {
  const ads = await Ad.find().lean();

  return ads;
};


exports.getSingleBind = (id) => Order.findById(id);


exports.update = (bindId, bindData) => Order.findByIdAndUpdate(bindId, bindData);


exports.delete = (bindId) => Order.findByIdAndDelete(bindId);

exports.addLikeToBind = async(bindId,email) =>{

  const bind = await this.getSingleBind(bindId)
  if(bind.likedBy.includes(email)){
    return
  }
bind.likes += 1
  bind.likedBy.push(email)
  return bind.save()
  



}