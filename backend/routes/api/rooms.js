const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();

const { Room } = require("../../models");

// Find available rooms
router.get(
	"/",
	asyncHandler(async (req, res) => {
		// Find available rooms
		const rooms = await Room.findAll({
			where: {
				occupied: false,
			},
		});

		console.log("ASDASDA", rooms);
	})
);

module.exports = router;
