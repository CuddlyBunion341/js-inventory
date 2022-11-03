"use strict";

const createItem = (() => {
	let id = 0;
	return (name, stackSize = 10) => ({
		id: id++,
		name,
		stackSize,
	});
})();

const itemList = [
	createItem("stone", 10),
	createItem("dirt", 10),
	createItem("cobblestone", 10),
	createItem("oak_log", 10),
];

const items = new Map();
for (const item of itemList) {
	items.set(item.name, item);
}

class InventoryItem {
	_count = 0;
	constructor() {
		this.slot = null;
	}
}
