const router = require("express").Router();

const bindsController = require("./controllers/bindsController");
const adController = require("./controllers/adController");
const userController = require("./controllers/userController");
const deliverController = require("./controllers/deliverController");
const profileController = require("./controllers/profileController");

router.use("/binds", bindsController);
router.use("/ads", adController);
router.use("/users", userController);
router.use('/delivers',deliverController) 
router.use("/profile", profileController);

module.exports = router;
