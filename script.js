document.addEventListener('DOMContentLoaded', function() {
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');
    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');
    const colorBox = document.querySelector('.color-box');
    const hexCode = document.getElementById('hexCode');
    const colorPicker = document.getElementById('colorPicker');

    function componentToHex(c) {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`.toUpperCase();
    }

    function hexToRgb(hex) {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return [r, g, b];
    }

    function updateColor() {
        const r = parseInt(redRange.value);
        const g = parseInt(greenRange.value);
        const b = parseInt(blueRange.value);

        const rgbColor = `rgb(${r}, ${g}, ${b})`;
        const hexColor = rgbToHex(r, g, b);

        colorBox.style.backgroundColor = rgbColor;
        hexCode.textContent = hexColor;
        colorPicker.value = hexColor;

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;
    }

    function updateRangeFromInput() {
        const r = parseInt(redInput.value);
        const g = parseInt(greenInput.value);
        const b = parseInt(blueInput.value);

        redRange.value = r;
        greenRange.value = g;
        blueRange.value = b;

        updateColor();
    }

    function updateFromColorPicker() {
        const [r, g, b] = hexToRgb(colorPicker.value);

        redRange.value = r;
        greenRange.value = g;
        blueRange.value = b;

        updateColor();
    }

    redRange.addEventListener('input', updateColor);
    greenRange.addEventListener('input', updateColor);
    blueRange.addEventListener('input', updateColor);

    redInput.addEventListener('input', updateRangeFromInput);
    greenInput.addEventListener('input', updateRangeFromInput);
    blueInput.addEventListener('input', updateRangeFromInput);

    colorPicker.addEventListener('input', updateFromColorPicker);

    // Inicializar el color al cargar la página
    updateColor();
});
