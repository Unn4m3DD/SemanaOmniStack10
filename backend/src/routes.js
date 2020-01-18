const express = require("express");
const router = express.Router();
const devController = require("./controllers/devController");
router.post("/devs", devController.store);
router.get("/devs", devController.index);
router.get("/devs/find", devController.find)
module.exports = router;
