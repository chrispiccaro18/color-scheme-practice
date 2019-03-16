import loadColorDisplay from './src/color-display-component.js';
import { createSchemeUrl } from './src/create-scheme-url.js';
import { createColorArray } from './src/create-color-array.js';

// total amount of colors 16777216
const randomColorForm = document.getElementById('random-color');

randomColorForm.addEventListener('submit', event => {
    event.preventDefault();

    const color = (16777216 + (Math.random()) * 16777215).toString(16).substr(1, 6);
    console.log(color);
    const url = createSchemeUrl(color);
    const originalColor = [color];
    loadColorDisplay(originalColor);
    fetch(url)
        .then(response => response.json())
        .then(body => {
            const colors = createColorArray(body);
            colors.unshift(color);
            loadColorDisplay(colors);
        });
});
