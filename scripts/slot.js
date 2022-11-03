"use strict";
class Slot {
	constructor() {
		this.item = null;
		this.createDOM();
	}

	createDOM() {
		const slot = document.createElement("div");
		slot.classList.add("slot");

		this.dom = slot;
	}
}
