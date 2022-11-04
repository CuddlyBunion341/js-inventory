"use strict";
const createItem = (() => {
	let id = 0;
	return (category, name, stackSize = 10) => ({
		id: id++,
		category,
		name,
		stackSize,
		url: `images/${name}.${category == "block" ? "webp" : "png"}`,
	});
})();

const itemList = [
	createItem("block", "stone"),
	createItem("block", "dirt"),
	createItem("block", "cobblestone"),
	createItem("block", "oak_log"),
	createItem("item", "bucket", 2),
	createItem("item", "diamond_pickaxe"),
	createItem("armor", "chainmail_chestplate"),
];

const items = new Map();
for (const item of itemList) {
	items.set(item.name, item);
}

class InventoryItem {
	_count = 0;
	static itemIndex = 0;
	static instances = [];
	constructor(itemName, count) {
		this.slot = null;
		this.item = items.get(itemName);
		this.createDOM();
		this.count = count;

		InventoryItem.instances.push(this);
	}

	createDOM() {
		const element = document.createElement("div");
		element.setAttribute("draggable", "true");

		const image = new Image();
		image.src = this.item.url;

		element.appendChild(image);
		element.setAttribute("id", `item${InventoryItem.itemIndex++}`);
		element.classList.add("item");
		this.dom = element;

		this.addEventListeners();
	}

	addEventListeners() {
		this.dom.addEventListener("dragstart", (e) => this.ondragstart(e));
	}

	ondragstart(e) {
		e.dataTransfer.setData("text/plain", this.dom.id);
		e.dataTransfer.effectAllowed = "move";
		this.dom.classList.add("drag");
	}

	static getItem(id) {
		const index = Number(id.substring(4));
		return InventoryItem.instances[index];
	}

	get count() {
		return this._count;
	}

	set count(count) {
		this._count = count;
		this.dom.dataset.count = count;
	}
}
