import { createSchemeUrl } from '../src/create-scheme-url.js';

const test = QUnit.test;

QUnit.module('Create url for api');

test('given hex code and scheme return url for scheme', assert => {
    //arrange
    const expected = 'https://www.thecolorapi.com/scheme?hex=24B1E0&mode=monochrome';
    const schemeOptions = {
        originalColor: '24B1E0',
        scheme: 'monochrome'
    };
    //act
    const result = createSchemeUrl(schemeOptions);
    //assert
    assert.equal(result, expected);
});