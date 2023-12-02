window.onload = function () {
	const close = document.getElementById("close");
	const open = document.getElementById("open");
	const menu = document.getElementById("menu");

	close.addEventListener("click", toggle);
	open.addEventListener("click", toggle);

	function toggle() {
		menu.classList.toggle("open");
		close.classList.toggle("d-none");
		open.classList.toggle("d-none");
	}
};
/*
  PROBLEM

	I forget a lot. 
	
	SOLUTION
	I want to you to build an app to help me remember.

	IMPORTANT
	A reminder system

	STEEPS 
	1. transform a problem statement in to data
	
	data = functions, objects, arrays, strings, numbers, booleans (in JS)

	event = {
		description: string
		time: string
	}

	2. transform solution statement in to data using the problem data

	(a) Store events. 
	(b) remind user.

	events = [event, event]

	events.push(event)

	function remindUser(event) { 
		const time = new Date();
		
		if (time >= event.time) {
			// reminds usr
		}
	}

	_____________________

	data = {
		circumference: 50,
		pi: 3.14
	}

	SOLUTION
	Find the radius of a circle

	function radius(data) {
		return data.circumference / data.pi
	}


	ASSIGNMENT

	1. I want to track the number of items i sell the most.

	const item = {
		id: string, // 123
		name: string, // coke
		dec: string,
		price: number,
		quantity: number // 50
	}

	const listOfItems = [item, item]

	function sellItem(itemId -"123"- , itemQuantityBeingSold -"2"-) {

		1. find item in listOfItems = singleItem // coke

		2. subtract itemQuantityBeingSold form singleItem.quantity // 50 - 2 = 48

		3. update the current quantity of singleItem in listOfItems // coke.quantity = 48

		4. Add soldItem to listOfSoldItems // soldItem = { 999, 123, 2}

	}




	const soldItem = {
		id: string,
		itemId: string,
		itemQuantityBeingSold: number
	}

	const listOfSoldItems = [soldItem, soldItem] // { 999, 123, 2}, { 111, 123, 4}, { 886, 345, 1}






	function mostSoldItems() {

		1. Group all unique soldItem

		const singleGroupSoldItem = {
			itemId: string,
			groupItemQuantitySold: number // 2 + 4 = 6
		}

		const groupSoldItems = [] // {123, 6}, {345, 1}

		2. Count the singleGroupSoldItem with the most groupItemQuantitySold

	}


	2. Research Database Normalization 
	Link: https://en.wikipedia.org/wiki/Database_normalization

	Apply it in JS.
*/
