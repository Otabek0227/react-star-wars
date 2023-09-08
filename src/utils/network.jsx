import { HTTP, HTTPS } from 'constants/api'

/**
 * Fetch so'rovi yuboriladi
 * @param {String} url 
 * @returns {Promise} Promise turidagi javob qaytaradi
 */
export const getApiResource = async (url) => {
    try {
        const res = await fetch(url)
        if (!res.ok) {
            console.error('Could not fetch.', res.status)
            return false
        }
        return await res.json()
    }
    catch (err) {
        console.error('Could not fetch.', err.message)
        return false
    }
}
// (async () => {
//     const body = await getApiResource(`${SWAPI_ROOT}${SWAPI_PEOPLE}`)
//     console.log(body)
// })();

/**
 * url manzilini Http dan Https ga almashtiradi
 * @param {String} url 
 * @returns Https li url
 */
export const changeHttp = url => {
    return url ? url.replace(HTTP, HTTPS) : url
}

/**
 * 
 * 
 * 
*/

export const makeConcurrentRequest = async (urls) => {
    const res = await Promise.all(urls.map(res => {
        return fetch(res).then(res => res.json())
    }))

    return res;
};
