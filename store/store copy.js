import { combineReducers } from "redux";
import donationReducer from "./donationStore";
import userReducer from "./userStore";
import itemReducer from "./itemStore";
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


// export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const reducer = combineReducers({
    users: userReducer,
    items: itemReducer,
    donations: donationReducer
})

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

// The store now has the ability to accept thunk functions in `dispatch`
const store = createStore(reducer, composedEnhancer)
export default store