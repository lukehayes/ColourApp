import {upto,randomBetween} from "./math.js"
import { createTag, createDiv} from "./UI.js"

let root = document.getElementById("app");

let colors = ["#f4f5f7", "#f2d1d4", "#e3e5e6"];
let colorPick = colors[randomBetween(0,3)];

root.style.backgroundColor = colors[randomBetween(0,3)];

createDiv({
    value: colorPick,
    parent: root,
    class: ['container', 'text-large']
});



