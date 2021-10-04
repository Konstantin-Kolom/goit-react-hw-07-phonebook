import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import actions from './phonebook-actions';

const contacts = localStorage.getItem('contacts');
const parselContacts = JSON.parse(contacts);

const items = createReducer([], {
  [actions.openBook]: () => [...parselContacts],
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) => state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
