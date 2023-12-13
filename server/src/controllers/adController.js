const router = require("express").Router();
const adService = require("../services/adService");
const userService = require("../services/userService");


router.post("/ad", async (req, res) => {
  
  const {
    fullname,
    address,
    images,
    description,
    article,
    email,
    username,
  } = req.body;
 

  try {
  
    await adService.create({
      fullname,
      images,
      address,
      article,
      description,
      _ownerEmail: email,
    });


    await userService.addAdToUser({
      article
    },
      email,
  );


    res.status(201).end();
    console.log("new ad saved");
  } catch (message) {
    res.status(400).json({ message });
  }
});

module.exports = router;
