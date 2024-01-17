import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import userReducer from './userStore';
import itemReducer from './itemStore';
import donationReducer from './donationStore';
import { composeWithDevTools } from '@redux-devtools/extension';

const reducer = combineReducers({
  users: userReducer,
  items: itemReducer,
  donations: donationReducer,
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(reducer, composedEnhancer);
export default store;
