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

export default Contacts;
