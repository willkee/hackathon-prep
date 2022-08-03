"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("People", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			firstName: {
				allowNull: false,
				type: Sequelize.STRING(60),
			},
			lastName: {
				allowNull: false,
				type: Sequelize.STRING(60),
			},
			role: {
				allowNull: false,
				type: Sequelize.STRING(100),
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
		return queryInterface.dropTable("People");
	},
};
