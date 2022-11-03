"use strict";
class Inventory {
	constructor(parent) {
		this.parent = parent;
		this.slots = [];
	}

	addContainer(container) {
		this.slots.concat(...container.slots);
		this.parent.appendChild(container.dom);
	}
}
