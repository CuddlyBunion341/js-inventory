"use strict";
class Inventory {
	constructor(parent) {
		this.parent = parent;
		this.slots = [];
		this.containers = new Map();
	}

	addContainer(container) {
		this.containers.set(container.name, container);
		this.slots.concat(...container.slots);
		this.parent.appendChild(container.dom);
	}
}
