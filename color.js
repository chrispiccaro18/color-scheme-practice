import loadColorDisplay from './src/color-display-component.js';
import { createSchemeUrl } from './src/create-scheme-url.js';
import { createColorArray } from './src/create-color-array.js';

// total amount of colors 16777216
const colorSchemeGenerator = document.getElementById('color-scheme-generator');

colorSchemeGenerator.addEventListener('submit', event => {
    event.preventDefault();
    const colorSchemeGeneratorData = new FormData(colorSchemeGenerator);
    const color = colorSchemeGeneratorData.get('color-picker').slice(1);
    const schemeOptions = {
        originalColor: [color],
        scheme: colorSchemeGeneratorData.get('scheme-type')
    };
    const url = createSchemeUrl(schemeOptions);
    loadColorDisplay(schemeOptions.originalColor);
    fetch(url)
        .then(response => response.json())
        .then(body => {
            const colors = createColorArray(body);
            colors.unshift(color);
            loadColorDisplay(colors);
        });
});

// random color formula (16777216 + (Math.random()) * 16777215).toString(16).substr(1, 6);