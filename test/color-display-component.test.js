import { createColorDisplay } from '../src/color-display-component.js';

const test = QUnit.test;

QUnit.module('Create color display');

test('make color display dom', assert => {
    //arrange
    const expected = /*html*/`
        <section class="color-display">
            <p>#665162</p>
            <div style="background-color: #665162;"></div>
        </section>
    `;
    const color = '665162';
    //act
    const result = createColorDisplay(color);
    //assert
    assert.htmlEqual(result, expected);
});