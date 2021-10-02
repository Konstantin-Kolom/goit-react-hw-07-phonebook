import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import phonebookReducer from './phonebook/phonebook-reducer';

const reduce = combineReducers({
  contacts: phonebookReducer,
});

const store = createStore(reduce, composeWithDevTools());

export default store;
