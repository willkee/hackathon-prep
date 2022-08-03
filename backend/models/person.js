"use strict";
module.exports = (sequelize, DataTypes) => {
	const Person = sequelize.define(
		"Person",
		{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			role: DataTypes.STRING,
		},
		{}
	);
	Person.associate = function (models) {
		Person.hasOne(models.Room, { foreignKey: "personId" });
	};
	return Person;
};
