// manage palette HTML
// manage brushes
// send brush data to canvas in order to draw on it by its brush type.

import { ctx } from "./canvas";

const htmlTag = `
<div class="title">Draw on Web</div>
<div class="brush">
    <div class="title">Brushes</div>
    <div class="items">
        <div>
            <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.6204 4.37472C16.1142 3.87509 15.2934 3.87509 14.7872 4.37472L9.27205 9.82164L11.0934 11.643L16.6204 6.18468C17.1265 5.68461 17.1265 4.87435 16.6204 4.37472ZM8.01423 14.6814C7.58372 15.0809 5.66002 15.9712 4.52732 15.108C4.52732 15.108 4.92151 14.8004 5.21989 14.1831C5.93258 12.29 7.70885 12.5705 7.70885 12.5705L8.3196 13.1734C8.32573 13.1795 8.77592 13.9753 8.01423 14.6814ZM8.64948 10.4368L7.27178 11.7952C6.35171 11.7742 5.07726 12.1002 4.52732 13.9018C4.10688 14.8547 3 14.8066 3 14.8066C5.29821 17.3559 8.00679 15.9113 8.62498 15.2847C9.1688 14.7344 9.24711 14.0606 9.18892 13.5216L10.4708 12.2581L8.64948 10.4368Z"
                    fill="white"
                />
            </svg>
        </div>
        <div></div>
    </div>
</div>
<div class="color">
    <div class="title">Color</div>
    <div class="items">
        <input class="color-picker" type="color" value="#2ea6ae" id="colorPicker" />
        <input class="thickness" value="10" type="number" />
    </div>
</div>
<div class="close">
    <div class="title">Close</div>
</div>
`;

const element = document.createElement("div");
element.className = "draw-on-web-palette";
element.innerHTML = htmlTag;
element.style.display = "none";

document.body.appendChild(element);

const colorPicker = document.querySelector(".draw-on-web-palette .color-picker");
const brushThickness = document.querySelector(".draw-on-web-palette .thickness");

export function setColorFromPalette() {
    ctx.fillStyle = colorPicker.value;
    ctx.lineWidth = brushThickness.value;
}

export function addPalette() {
    colorPicker.addEventListener("input", (e) => {
        ctx.fillStyle = e.target.value;
    });
    brushThickness.addEventListener("input", (e) => {
        console.log(e.target.value);
        if(e.target.value >= 50) {
            e.target.value = 50;
        }
        if(e.target.value < 0) {
            e.target.value = 1;
        }
        ctx.lineWidth = e.target.value;
    });
}

export function togglePalette() {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
