"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("Rooms", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			occupied: {
				allowNull: false,
				type: Sequelize.BOOLEAN,
				defaultValue: false,
			},
			personId: {
				allowNull: true,
				type: Sequelize.INTEGER,
				references: { model: "People" },
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: new Date(),
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: new Date(),
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("Rooms");
	},
};
