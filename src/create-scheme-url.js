const BASE_URL = 'http://www.thecolorapi.com/scheme';

export function createSchemeUrl(color) {
    const url = new URL(BASE_URL);
    url.searchParams.set('hex', color);
    url.searchParams.set('scheme', 'monochrome');
    return url.toString();
}