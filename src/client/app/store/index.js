import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import contactReducer from './../reducers/contactReducer';

const reducers = combineReducers({
  contact: contactReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

export default store;
