// import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import phoneAticons from '../../redux/phonebook/phonebookActions';
import { MdDeleteForever } from '../../../node_modules/react-icons/md';
import { useGetContactsQuery } from '../../redux/phonebook/phonebookSlice';

import { SpinnerLoader } from '../Loader/Loader';

import s from './Contacts.module.css';

function Contacts({ open, stateApp, onDeleteContact }) {
  const { data, isFetching, isError } = useGetContactsQuery('');
  return (
    <>
      {isFetching && <SpinnerLoader />}
      {isError && <h2>You phonebook no found!</h2>}
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
      {data && data.length === 0 && <h2>You phonebook empty !</h2>}
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
