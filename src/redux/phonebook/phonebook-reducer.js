import { combineReducers } from 'redux';

import types from './phonebook-types';

const items = (state = [], { type, paylode }) => {
  switch (type) {
    case types.ADD:
      return [...state, paylode];
    default:
      return state;
  }
};

const filter = (state = '', action) => {
  return state;
};

export default combineReducers({ items, filter });
