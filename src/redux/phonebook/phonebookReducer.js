import { createReducer, combineReducers } from '@reduxjs/toolkit';

import actions from './phonebookActions';

// const contacts = localStorage.getItem('contacts');
// const parselContacts = JSON.parse(contacts);
//

// const entities = createReducer([], {
//   [actions.fetchPhoneBookSuccess]: (_, action) => action.payload,
//   //   [actions.addContact]: (state, action) => [...state, action.payload],
// });

// const isLoading = createReducer(false, {
//   [actions.fetchPhoneBookRequest]: true,
//   [actions.fetchPhoneBookRequest]: false,
//   [actions.fetchPhoneBookError]: false,
// });

// const error = createReducer(null, {
//   [actions.fetchPhoneBookError]: (_, action) => action.payload,
//   [actions.fetchPhoneBookRequest]: () => null,
// });

//

const items = createReducer([], {
  //   [actions.openBook]: () => [...parselContacts],
  //   [actions.openBook]: () => [...entities],
  //   [actions.fetchPhoneBookSuccess]: (_, action) => action.payloade,
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) => state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

// export default combineReducers({ items, filter, entities, isLoading, error });
export default combineReducers({ items, filter });
