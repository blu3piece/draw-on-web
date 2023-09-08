
const canvas = document.createElement('canvas');
canvas.id = "draw-on-web";
document.body.appendChild(canvas);
canvas.style.display = 'none';

export const ctx = canvas.getContext("2d");

ctx.fillStyle = "#000000";
ctx.globalAlpha = "1";

function disableCanvas() {
    canvas.style.display = "none";
}

function enableCanvas() {
    canvas.style.display = "block";
    canvas.style.pointerEvents = "none";
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

export function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function toggleCanvas(e) {
    if(canvas.style.display == 'none') {
        enableCanvas();
    }
    else disableCanvas();
}

export function download() {
    alert("다운로드");
    let link = document.createElement('a');
    link.download = 'filename.png';
    link.href = ctx.canvas.toDataURL();
    link.click();
}