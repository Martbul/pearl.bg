const router = require("express").Router();
const displayAdsService = require("../services/displayAdsService");

router.get("/ads", async (req, res) => {
  
  try {
    
    const ads = await displayAdsService.getAll();

    res.json(ads);
  } catch (message) {
    res.status(400).json({ message });
  }
});

router.get("/ads/:adId", async (req, res) => {
  const adId = req.params.bindId;

  const ad = await bindService.getSingleBind(adId).lean();

  if (!ad) {
    return;
  }
  res.json(ad);

  //res.render("details");
});

router.put("/binds/:bindId", async (req, res) => {
  try {
    const { bindId } = req.params;
    console.log(bindId);
    

    const { fullname, address, dayForDelivery, timeForDelivery, order, email } =
      req.body;

    const bindData = {
      fullname,
      address,
      dayForDelivery,
      timeForDelivery,
      order
      // _ownerId: req.user._id,
    };
    console.log(bindData);

    await bindService.update(bindId, bindData);

    res.json(bindData).status(200).end();
  } catch (message) {
    res.status(400).json({ message });
  }
});

router.delete("/binds/:bindId", async (req, res) => {
  
  try {
    const { bindId } = req.params;
    // console.log(bindId);
    await bindService.delete(bindId);
    res.json(bindId).status(200).end();
  } catch (message) {
    res.status(400).json({ message });
  }
});



router.post("/binds/like", async (req, res) => {
  const {email}  = req.body
  const {bindId} = req.body

  const result = await bindService.addLikeToBind(bindId, email);

  res.json(result).status(200).end()
});


// router.post('/binds/:bindId', async (req, res) => {
//   console.log('here');
//   console.log(req.body);
// })


module.exports = router;
