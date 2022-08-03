"use strict";
module.exports = (sequelize, DataTypes) => {
	const Room = sequelize.define(
		"Room",
		{
			occupied: DataTypes.BOOLEAN,
			personId: DataTypes.INTEGER,
		},
		{}
	);
	Room.associate = function (models) {
		Room.belongsTo(models.Person, { foreignKey: "personId" });
	};
	return Room;
};
