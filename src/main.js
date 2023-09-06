// 페이지 로드 시 바로 실행

console.log("슽덩모듈");

const canvas = document.querySelector('#draw-on-web');

canvas.style.display = "block";
canvas.style.pointerEvents = "none";

const ctx = canvas.getContext("2d");
let pressed = false;
let timer = 0;

let hslColor = 0;

ctx.fillStyle = "#000000";

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let prevX, prevY;

window.addEventListener("mousedown", (e) => {
    if(e.button != 2) return;
    pressed = true;
    prevX = e.clientX - canvas.offsetLeft;
    prevY = e.clientY - canvas.offsetTop;
});

window.addEventListener("mouseup", (e) => {
    if(e.button != 2) return;
    pressed = false;
});

window.addEventListener("mousemove", (e) => {
    hslColor++;
    hslColor %= 360;
    if(!pressed) return;
    timer++;
    ctx.beginPath();
    
    ctx.moveTo(prevX, prevY);
    ctx.arc(e.clientX, e.clientY, ctx.lineWidth, 0, 2*Math.PI);
    ctx.strokeStyle = "hsl(" + hslColor + ", 100%, 50%)";
    ctx.lineWidth = 30;

    ctx.stroke();
    ctx.closePath();
    
    prevX = e.clientX - canvas.offsetLeft;
    prevY = e.clientY - canvas.offsetTop;
});

window.addEventListener("contextmenu", (e) => {
    if(timer >= 20)
        e.preventDefault();
    timer = 0;
})