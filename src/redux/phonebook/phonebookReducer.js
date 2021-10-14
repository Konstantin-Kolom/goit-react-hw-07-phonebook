import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './phonebookActions';

// const contacts = localStorage.getItem('contacts');
// const parselContacts = JSON.parse(contacts);

const items = createReducer([], {
  [actions.openBook]: (state, { payload }) => [...payload],
  [actions.addContact]: (state, { payload }) => [...state, payload],
  //   [actions.deleteContact]: (state, { payload }) => state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

// export default combineReducers({ items, filter, entities, isLoading, error });
export default combineReducers({ items, filter });
