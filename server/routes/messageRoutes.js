const {
  addMessage,
  getAllMessage,
} = require("../controllers/messageController");

const router = require("express").Router();

router.post("/addMessage", addMessage);
router.get("/getAllMessage", getAllMessage);
module.exports = router;
