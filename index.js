"use strict";
const DEFAULT_EDGE = 28; // AS px (28 x 28 px)

const grid = document.querySelector(".grid")
const cells = [];

for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 14; j++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    cells.push(cell);
  }
}

grid.append(...cells);
