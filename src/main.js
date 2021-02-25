import { createDiv } from "./UI.js"
import { color } from "./color.js"

let root = document.getElementById("app");
let colorPick = color();
root.style.backgroundColor = colorPick;

createDiv({
    value: colorPick,
    parent: root,
    class: ['container', 'text-large']
});


