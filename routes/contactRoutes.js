const {
  sendContactMessageController,
} = require("../controllers/contactController");

const router = require("express").Router();

// send contact message
router.post("/", sendContactMessageController);

module.exports = router;
