import types from './phonebook-types';
import shortid from 'shortid';

const addContact = data => ({
  type: types.ADD,
  paylode: { id: shortid.generate(data.name), name: data.name, number: data.number },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact };
