import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import types from './phonebook-types';
import actions from './phonebook-actions';

const contacts = localStorage.getItem('contacts');
const parselContacts = JSON.parse(contacts);

// const parselLocalStorage = localStorage.setItem('contacts', JSON.stringify());
// console.log(parselLocalStorage);

const items = createReducer([], {
  [actions.openBook]: () => [...parselContacts],
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) => state.filter(contact => contact.id !== payload),
});

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({ items, filter });
