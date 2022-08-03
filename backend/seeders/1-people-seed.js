"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"People",
			[
				{ firstName: "Sigurd", lastName: "Bednar", role: "Occupant" },
				{ firstName: "Colleen", lastName: "Carroll", role: "Staff" },
				{ firstName: "Myrtis", lastName: "Mills", role: "Occupant" },
				{ firstName: "Gilberto", lastName: "Carroll", role: "Staff" },
				{ firstName: "Sandra", lastName: "Zulauf", role: "Occupant" },
				{ firstName: "Dolly", lastName: "Altenwerth", role: "Staff" },
				{ firstName: "Josh", lastName: "Senger", role: "Staff" },
				{ firstName: "Boris", lastName: "Wiza", role: "Occupant" },
				{ firstName: "Eli", lastName: "Howe", role: "Staff" },
				{ firstName: "Chadrick", lastName: "Kutch", role: "Staff" },
				{ firstName: "Retta", lastName: "Wolff", role: "Occupant" },
				{ firstName: "Zachery", lastName: "Bogisich", role: "Staff" },
				{ firstName: "Heidi", lastName: "Parisian", role: "Occupant" },
				{ firstName: "Gia", lastName: "Hills", role: "Occupant" },
				{ firstName: "Christa", lastName: "King", role: "Staff" },
				{ firstName: "Desmond", lastName: "Bauch", role: "Staff" },
				{ firstName: "Alfonzo", lastName: "Kshlerin", role: "Staff" },
				{ firstName: "Dean", lastName: "Gibson", role: "Staff" },
				{ firstName: "Yoshiko", lastName: "Will", role: "Staff" },
				{
					firstName: "Frederic",
					lastName: "McDermott",
					role: "Occupant",
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("People", null, {});
	},
};
