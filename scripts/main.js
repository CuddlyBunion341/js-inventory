"use strict";
const wrapper = document.querySelector(".wrapper");

const inventory = new Inventory(wrapper);
inventory.addContainer(new Container("armor", 4, 1));
inventory.addContainer(new Container("craft-in", 2, 2));
inventory.addContainer(new Container("craft-out", 1, 1));
inventory.addContainer(new Container("main", 3, 9));
inventory.addContainer(new Hotbar());

inventory.containers.get("hotbar").setItems([
	{ item: "stone", count: 10 },
	{ item: "cobblestone", count: 10 },
]);
null,
	document.addEventListener("keydown", (e) => {
		if (e.repeat) return;
		const hotbar = inventory.containers.get("hotbar");

		const actions = {
			1: () => (hotbar.selectedSlot = 0),
			2: () => (hotbar.selectedSlot = 1),
			3: () => (hotbar.selectedSlot = 2),
			4: () => (hotbar.selectedSlot = 3),
			5: () => (hotbar.selectedSlot = 4),
			6: () => (hotbar.selectedSlot = 5),
			7: () => (hotbar.selectedSlot = 6),
			8: () => (hotbar.selectedSlot = 7),
			9: () => (hotbar.selectedSlot = 8),
			e: () => {
				wrapper.classList.toggle("open");
			},
		};

		actions[e.key]?.();
	});
