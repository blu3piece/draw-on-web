// import brushes
import { canvasVisibleState, ctx, disableCanvas, enableCanvas } from "./canvas";
// add draw events

let pressed = false;
let timer = 0;

function toggleCanvas(e) {
    if(e.altKey && e.code === "Digit1") {
        alert("슽덩이");
        if(canvasVisibleState) disableCanvas();
        else enableCanvas();
    }
}


export function addEvent() {
    let prevX, prevY;
    let hslColor = 0;
    
    window.addEventListener("mousedown", (e) => {
        if(e.button != 2) return;
        pressed = true;
        prevX = e.clientX;
        prevY = e.clientY;
    })

    window.addEventListener("mouseup", (e) => {
        if(e.button != 2) return;
        pressed = false;
    });

    window.addEventListener("contextmenu", (e) => {
        if(timer >= 20)
            e.preventDefault();
        timer = 0;
    });

    window.addEventListener("mousemove", (e) => {
        hslColor++;
        hslColor %= 360;
        if(!pressed) return;
        timer++;
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = "hsl(" + hslColor + ", 100%, 50%)";
        ctx.lineTo(e.clientX, e.clientY);
        ctx.lineWidth = 30;
        ctx.fillStyle = "hsl(" + hslColor + ", 100%, 50%)";
        ctx.stroke();
        ctx.closePath();
        prevX = e.clientX;
        prevY = e.clientY;
    });
    
    window.addEventListener('resize', (e) => {
        const temp = ctx.getImageData(0,0,ctx.canvas.width, ctx.canvas.height);
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        ctx.putImageData(temp, 0, 0);
    });
    
    document.addEventListener('keyup', toggleCanvas);
}