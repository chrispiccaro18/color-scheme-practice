import loadColorDisplay from './src/color-display-component.js';

// total amount of colors 16777216
const randomColorForm = document.getElementById('random-color');

randomColorForm.addEventListener('submit', event => {
    event.preventDefault();
    const colors = [];
    for(let i = 0; i < 5; i++) {
        colors.push((16777216 + (Math.random()) * 16777215).toString(16).substr(1, 6));
    }
    loadColorDisplay(colors);
});
