class Container {
	constructor(name, rows, cols) {
		this.rows = rows;
		this.cols = cols;
		this.slots = [];
		this.createDOM(name);
	}

	createDOM(name) {
		const container = document.createElement("div");
		container.classList.add("container", name);
		container.style.setProperty("--cols", this.cols);

		this.dom = container;

		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				const slot = new Slot();
				this.slots.push(slot);
				container.appendChild(slot.dom);
			}
		}
	}
}
