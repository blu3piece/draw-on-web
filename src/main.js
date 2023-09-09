// main function : defines entry points.

import { addCanvas } from "./canvas";
import { addEvent } from "./event";
import { addPalette } from "./palette";

(function() {
    addEvent();
    addCanvas();
    addPalette();
})();

console.log("Draw on web :: Successfully Loaded from main.js");
console.warn("Draw on web :: If this extension causes problem, contact to https://github.com/johannblue");