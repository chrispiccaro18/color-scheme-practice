const test = QUnit.test;

QUnit.module('Create color display');

function createColorDisplay() {
    const html = /*html*/`
        <section class="color-display">
            <p>#665162</p>
            <div style="background-color: #665162;"></div>
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
    //act
    const result = createColorDisplay();
    //assert
    assert.htmlEqual(result, expected);
});