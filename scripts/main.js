"use strict";
const wrapper = document.querySelector(".wrapper");

const inventory = new Inventory(wrapper);
inventory.addContainer(new Container("armor", 4, 1));
inventory.addContainer(new Container("craft-in", 2, 2));
inventory.addContainer(new Container("craft-out", 1, 1));
inventory.addContainer(new Container("main", 3, 9));
inventory.addContainer(new Hotbar());

{
	// add filters to armor slots
	const filters = [
		(item) => item.name.includes("helmet"),
		(item) => item.name.includes("chestplate"),
		(item) => item.name.includes("leggings"),
		(item) => item.name.includes("boots"),
	];

	const armor = inventory.containers.get("armor");
	for (let i = 0; i < 4; i++) {
		armor.slots[i].filter = filters[i];
	}

	// add filter to crafting slot
	const craftOut = inventory.containers.get("craft-out");
	craftOut.slots[0].filter = () => false;
}

inventory.containers.get("hotbar").setItems([
	{ item: "stone", count: 10 },
	{ item: "cobblestone", count: 10 },
	{ item: "chainmail_chestplate", count: 1 },
	{ item: "chainmail_helmet", count: 1 },
	{ item: "chainmail_leggings", count: 1 },
	{ item: "chainmail_boots", count: 1 },
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
				document.body.classList.toggle("dimmed");
			},
		};

		actions[e.key]?.();
	});
