// main function : defines entry points.

import { addCanvas, ctx } from "./canvas";
import { addEvent } from "./event";
import { addPalette } from "./palette";

(function() {
    addEvent();
    addCanvas();
    addPalette();
    ctx.fillStyle = "#FFFFFF";
    ctx.lineWidth = 10;
})();

console.log("Draw on web :: Successfully Loaded from main.js");
console.log("Draw on web :: If this extension causes problem, contact to https://github.com/johannblue");