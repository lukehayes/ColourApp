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

for(let i = 0; i<=4; i++)
{
    createDiv({
        value: null,
        parent: display,
        class: ['color-box']
    });
}

