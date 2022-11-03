"use strict";

const wrapper = document.querySelector(".wrapper");

const inventory = new Inventory(wrapper);
inventory.addContainer(new Container("armor", 4, 1));
inventory.addContainer(new Container("craft-in", 2, 2));
inventory.addContainer(new Container("craft-out", 1, 1));
inventory.addContainer(new Container("main", 3, 9));
inventory.addContainer(new Container("hotbar", 1, 9));
