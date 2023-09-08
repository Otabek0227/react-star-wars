import { SHOW_NAV, HIDE_NAV } from "store/constants/actionTypes";

const initialState = false

const isNavbarReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case SHOW_NAV:
            console.log('first')
            return true
        case HIDE_NAV:
            return false
        default:
            return state
    }
}

export default isNavbarReducer 