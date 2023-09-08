const htmlTag = `
<div class="title">Draw on Web</div>
<div class="brush wrap">
    <div>Brushes</div>
    <div class="items">
        <div></div>
    </div>
</div>
<div class="color wrap">
    <label for="colorPicker">
        <div class="color-preview"></div>
        <input type="color" value="#1dbbce" id="colorPicker">
    </label>
    <input type="text" name="ss" id="">
</div>
`;

const element = document.createElement('div');
element.className = "draw-on-web-palette";
element.innerHTML = htmlTag;
element.style.display = 'none';

export function appendPalette() {
    document.body.appendChild(element);
}

export function togglePalette() {
    if(element.style.display === 'none') {
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
}