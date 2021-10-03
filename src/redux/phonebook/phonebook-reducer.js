import { combineReducers } from 'redux';

import types from './phonebook-types';

const items = (state = [], { type, paylode }) => {
  switch (type) {
    case types.ADD:
      return [...state, paylode];

    case types.DELETE:
      return state.filter(contact => contact.id !== paylode);

    default:
      return state;
  }
};

const filter = (state = '', { type, paylode }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return paylode;

    default:
      return state;
  }
};

export default combineReducers({ items, filter });
