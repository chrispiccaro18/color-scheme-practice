import { createSchemeUrl } from '../src/create-scheme-url.js';

const test = QUnit.test;

QUnit.module('Create url for api');

test('given hex code return url for scheme', assert => {
    //arrange
    const expected = 'http://www.thecolorapi.com/scheme?hex=24B1E0&scheme=monochrome';
    const color = '24B1E0';
    //act
    const result = createSchemeUrl(color);
    //assert
    assert.equal(result, expected);
});