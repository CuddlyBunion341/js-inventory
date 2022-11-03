class Hotbar extends Container {
	_selectedSlot = 0;
	constructor() {
		super("hotbar", 1, 9);
		this.selectedSlot = 0;
	}

	get selectedSlot() {
		return this.slots[this._selectedSlot];
	}

	get selectedSlotIndex() {
		return this._selectedSlot;
	}

	set selectedSlot(index) {
		this._selectedSlot = index;
		for (let i = 0; i < 9; i++) {
			const slot = this.slots[i].dom;
			slot.classList.remove("selected");
			if (index == i) {
				slot.classList.add("selected");
			}
		}
	}
}
