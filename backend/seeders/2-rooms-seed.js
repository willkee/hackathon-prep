"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Rooms",
			[
				{
					occupied: false,
					personId: null,
				},
				{
					occupied: true,
					personId: 3,
				},
				{
					occupied: true,
					personId: 5,
				},
				{
					occupied: true,
					personId: 8,
				},
				{
					occupied: true,
					personId: 1,
				},
				{
					occupied: true,
					personId: 20,
				},
				{
					occupied: true,
					personId: 11,
				},
				{
					occupied: true,
					personId: 13,
				},
				{
					occupied: true,
					personId: 14,
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Rooms", null, {});
	},
};
