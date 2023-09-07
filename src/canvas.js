
const canvas = document.createElement('canvas');
canvas.id = "draw-on-web";
document.body.appendChild(canvas);

export const ctx = canvas.getContext("2d");

ctx.fillStyle = "#000000";
ctx.globalAlpha = "1";

export let canvasVisibleState = false;

export function disableCanvas() {
    canvas.style.display = "none";
    canvasVisibleState = false;
}

export function enableCanvas() {
    canvas.style.display = "block";
    canvas.style.pointerEvents = "none";
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    canvasVisibleState = true;
}

export function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}