import { createStore, combineReducers } from 'redux';

import phonebookReducer from './phonebook/phonebook-reducer';

const rootReduce = combineReducers({
  contacts: phonebookReducer,
});

const store = createStore(rootReduce);

export default store;
