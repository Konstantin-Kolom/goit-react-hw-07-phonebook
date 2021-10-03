import { connect } from 'react-redux';
import phoneAticons from '../../redux/phonebook/phonebook-actions';

import s from './Contacts.module.css';
import { MdDeleteForever } from '../../../node_modules/react-icons/md';

function Contacts({ stateApp, onDeleteContact }) {
  return (
    <ul className={s.ContactsList}>
      {stateApp.map(({ id, name, number }) => (
        <li className={s.ContactsItem} key={id} id={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button className={s.BtnDeletContact} type="button" onClick={() => onDeleteContact(id)}>
            <span>
              <MdDeleteForever />
            </span>
            <span>Delete</span>
          </button>
        </li>
      ))}
    </ul>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
