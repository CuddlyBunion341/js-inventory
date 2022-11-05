"use strict";

class Slot {
	_item = null;
	constructor() {
		this.filter = () => true; // for armor
		this.createDOM();
	}

	createDOM() {
		const slot = document.createElement("div");
		slot.classList.add("slot");
		this.dom = slot;

		this.addEventListeners();
	}

	addEventListeners() {
		this.dom.addEventListener("drop", (e) => this.ondrop(e));
		this.dom.addEventListener("dragover", (e) => this.ondragover(e));
	}

	ondragover(e) {
		e.preventDefault();
	}

	ondrop(e) {
		if (this.dom.children.length == 0) {
			const id = e.dataTransfer.getData("text/plain");
			const item = InventoryItem.getItem(id);

			if (this.filter(item)) {
				this.dom.appendChild(item.dom);
			}
		}
	}

	get item() {
		return this._item;
	}

	set item(item) {
		this._item = item;
		if (item != null) {
			this.dom.appendChild(item.dom);
		}
	}
}
