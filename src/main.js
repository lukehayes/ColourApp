import { createDiv } from "./UI.js"
import { color } from "./color.js"
import { Queue } from "./queue.js"
import { remember, retrieve, forget, clear } from "./storage.js"

let root = document.getElementById("app");
let colorPick = color();
//remember("color1", colorPick);
root.style.backgroundColor = colorPick;

createDiv({
    value: colorPick,
    parent: root,
    class: ['container', 'text-large']
});

let wrapper = createDiv({
    value: null,
    parent: root,
    class: ['container']
});

let display = createDiv({
    value: null,
    parent: wrapper,
    class: ['display']
});


//------------------------------
// Create test colour boxes
//------------------------------
for(let i = 0; i<=4; i++)
{
    createDiv({
        value: null,
        parent: display,
        class: ['color-box']
    });
}


let q = new Queue();

q.push();
