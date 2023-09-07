
export function appendPalette() {
    const htmlTag = `
        <span class="title">Draw on Web</span>
        <div class="brush wrap">
            <div>Brushes</div>
            <div class="items">
                
            </div>
        </div>
        <div class="color wrap">
            <label for="colorPicker">
                <div class="color-preview"></div>
                <input type="color" value="#1dbbce" id="colorPicker">
            </label>
            <input type="text" name="ss" id="">
        </div>`;

    const element = document.createElement('div');
    element.className = "draw-on-web-palette";
    element.innerHTML = htmlTag;

    document.body.appendChild(element);
}
