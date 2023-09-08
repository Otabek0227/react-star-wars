import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { STORE } from "store/constants/actionTypes"
import rootReducer from './reducers'
import { setLocalStorage } from "utils/localStorage"


const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => {
    setLocalStorage(STORE, store.getState().favouriteReducer)
})


export default store