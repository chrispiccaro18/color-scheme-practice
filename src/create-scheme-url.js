const BASE_URL = 'https://www.thecolorapi.com/scheme';

export function createSchemeUrl(schemeOptions) {
    const url = new URL(BASE_URL);
    url.searchParams.set('hex', schemeOptions.originalColor);
    url.searchParams.set('scheme', schemeOptions.scheme);
    return url.toString();
}