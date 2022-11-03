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
	createItem("stone"),
	createItem("dirt"),
	createItem("cobblestone"),
	createItem("oak_log"),
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
