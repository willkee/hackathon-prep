const express = require("express");
const router = express.Router();
const peopleRouter = require("./people");
const roomsRouter = require("./rooms");

router.use("/people", peopleRouter);
router.use("/rooms", roomsRouter);

module.exports = router;
