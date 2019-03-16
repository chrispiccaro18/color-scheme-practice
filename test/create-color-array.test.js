import scheme from '../data/scheme.js';

const test = QUnit.test;

QUnit.module('Create color array');

function createColorArray(scheme) {
    const colorArray = [];
    scheme.colors.forEach(color => {
        colorArray.push(color.hex.clean);
    });
    return colorArray;
}

test('given data return an array of colors as hex values', assert => {
    //arrange
    const expected = [
        '07DD18',
        '1EF930',
        '4FFB5D',
        '81FD8A',
        'B2FEB8'
    ];
    //act
    const result = createColorArray(scheme);
    //assert
    assert.deepEqual(result, expected);
});