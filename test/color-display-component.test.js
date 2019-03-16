const test = QUnit.test;

QUnit.module('Create color display');

function createColorDisplay(color) {
    const html = /*html*/`
        <section class="color-display">
            <p>#${color}</p>
            <div style="background-color: #${color};"></div>
        </section>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

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