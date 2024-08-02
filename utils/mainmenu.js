const mainMenu = [
	{ number: 1, text: "Place An Order" },
	{ number: 99, text: "Checkout Order" },
	{ number: 98, text: "Check Order History" },
	{ number: 97, text: "Check Current Order" },
	{ number: 0, text: "Cancel Order" },
];

const foodMenu = [
	{ number: 1, food: "Maggi", price: 70 },
	{ number: 2, food: "Pizza", price: 500 },
	{ number: 3, food: "Sandwich", price: 80 },
	{ number: 4, food: "Butter Chicken", price: 300 },
	{ number: 5, food: "Egg Pasta", price: 100 },
];

module.exports = {
	mainMenu,
	foodMenu,
};
