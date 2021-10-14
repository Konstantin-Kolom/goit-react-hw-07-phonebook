import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import phoneAticons from '../../redux/phonebook/phonebookActions';
import { MdDeleteForever } from '../../../node_modules/react-icons/md';
// import * as bookOperation from '../../redux/phonebook/phonebookOperation';
import { useGetContactsQuery } from '../../redux/phonebook/phonebookSlice';
// import { }

import s from './Contacts.module.css';

function Contacts({ open, stateApp, onDeleteContact }) {
  const { data, error, isFetching, isError } = useGetContactsQuery('');
  //   console.log(data);
  //   console.log(error);
  //   console.log(isLoading);

  useEffect(() => {
    if (stateApp) {
      // dispatch(bookOperation.fetchAddNamber(stateApp));
      // localStorage.setItem('contacts', JSON.stringify(stateApp));
      //  addServer();
      // console.log(stateApp);
    }
  }, [stateApp]);

  return (
    <>
      {data && (
        <ul className={s.ContactsList}>
          {data.map(({ id, name, number }) => (
            <li className={s.ContactsItem} key={id} id={id}>
              <p>{name}</p>
              <p>{number}</p>
              <button
                className={s.BtnDeletContact}
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                <span>
                  <MdDeleteForever />
                </span>
                <span>Delete</span>
              </button>
            </li>
          ))}
        </ul>
      )}
      {/* {data === [] && <h2>You phonebook empty</h2>} */}
    </>
  );
}

const getVisibleContact = (allContacts, filter) => {
  const normalizeFilter = filter.toLowerCase();
  return allContacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const visibleContact = getVisibleContact(items, filter);

  return {
    stateApp: visibleContact,
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(phoneAticons.deleteContact(id)),
  open: () => dispatch(phoneAticons.openBook()),
  //   open: () => dispatch(bookOperation.fetchPhoneBook()),
  //   addServer: () => dispatch(bookOperation.fetchAddNamber()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
