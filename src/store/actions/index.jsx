import { ADD_PERSON_TO_FAVOURITE, REMOVE_PERSON_FROM_FAVOURITE } from "store/constants/actionTypes"

export const setPrsonToFavourite = person => ({
    type: ADD_PERSON_TO_FAVOURITE,
    payload: person
})
export const removePrsonFromFavourite = personId => ({
    type: REMOVE_PERSON_FROM_FAVOURITE,
    payload: personId
})
