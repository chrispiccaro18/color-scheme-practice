import loadColorDisplay from './src/color-display-component.js';
import { createSchemeUrl } from './src/create-scheme-url.js';
import { createColorArray } from './src/create-color-array.js';

// total amount of colors 16777216
const randomColorForm = document.getElementById('random-color');

randomColorForm.addEventListener('submit', event => {
    event.preventDefault();
    const randomColorFormData = new FormData(randomColorForm);
    const color = (16777216 + (Math.random()) * 16777215).toString(16).substr(1, 6);
    const schemeOptions = {
        originalColor: [color],
        scheme: randomColorFormData.get('scheme-type')
    };
    const url = createSchemeUrl(schemeOptions);
    console.log(url);
    loadColorDisplay(schemeOptions.originalColor);
    fetch(url)
        .then(response => response.json())
        .then(body => {
            const colors = createColorArray(body);
            colors.unshift(color);
            loadColorDisplay(colors);
        });
});
