const test = QUnit.test;

QUnit.module('Create url for api');

const BASE_URL = 'http://www.thecolorapi.com/scheme';

function createSchemeUrl(color) {
    const url = new URL(BASE_URL);
    url.searchParams.set('hex', color);
    url.searchParams.set('scheme', 'monochrome');
    return url.toString();
}

test('given hex code return url for scheme', assert => {
    //arrange
    const expected = 'http://www.thecolorapi.com/scheme?hex=24B1E0&scheme=monochrome';
    const color = '24B1E0';
    //act
    const result = createSchemeUrl(color);
    //assert
    assert.equal(result, expected);
});