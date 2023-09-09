const canvas = document.createElement('canvas');
export const ctx = canvas.getContext("2d");

ctx.fillStyle = "#000000";
ctx.globalAlpha = "1";

export function addCanvas () {
    canvas.id = "draw-on-web";
    canvas.style.display = 'none';
    document.body.appendChild(canvas);
}

function disableCanvas() {
    canvas.style.display = "none";
}

function enableCanvas() {
    canvas.style.display = "block";
    canvas.style.pointerEvents = "none";
    ctx.canvas.width = document.body.scrollWidth;
    ctx.canvas.height = document.body.scrollHeight;
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