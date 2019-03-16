import scheme from '../data/scheme.js';
import { createColorArray } from '../src/create-color-array.js';

const test = QUnit.test;

QUnit.module('Create color array');

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