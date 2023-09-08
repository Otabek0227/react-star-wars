import { HTTPS, HTTP, SWAPI_PEOPLE, SWAPI_ROOT, URL_IMG_PERSON, GUIDE_IMG_EXTENSION, SWAPI_PARAM_PAGE } from "constants/api"
const chekProtocol = (url) => {
    if (url.indexOf(HTTPS) >= 0) {
        return HTTPS
    }
    return HTTP
}
const getId = (url, category) => {
    const protocol = chekProtocol(url)
    const id = url
    return id
        .replace(protocol + SWAPI_ROOT + category, '')
        .replace(/\//g, '')
}

export const getPeoplePageId = url => {
    const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
    const id = url.slice(pos + SWAPI_PARAM_PAGE.length);

    return Number(id);
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE)

export const getPeopleImage = id => `${URL_IMG_PERSON}${id}${GUIDE_IMG_EXTENSION}`