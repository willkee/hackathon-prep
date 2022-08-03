const faker = require("faker");
const randomNum = (max) => Math.ceil(Math.random() * max);
const randomNumFloor = (max) => Math.floor(Math.random() * max);

const peopleSeed = (max) => {
	let i = 0;

	const roles = ["Staff", "Occupant"];

	while (i < max) {
		const user = {
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			role: roles[randomNumFloor(2)],
		};

		console.log(user, ",");
		i++;
	}
};

peopleSeed(20);
