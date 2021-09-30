import React, { useState } from 'react';

import s from './DataRecordForm.module.css';
import { FaPhoneSquareAlt } from '../../../node_modules/react-icons/fa';
import { BsFillPersonPlusFill } from '../../../node_modules/react-icons/bs';

function DataRecordForm({ onFormSubmit }) {
  const [name, SetName] = useState('');
  const [number, SetNumber] = useState('');

  const hendleChangeName = e => {
    const value = e.currentTarget.value;

    SetName(value);
  };

  const hendleChangeNumber = e => {
    const value = e.currentTarget.value;
    SetNumber(value);
  };

  const hendleSubmit = e => {
    e.preventDefault();
    onFormSubmit({ name, number });
    reset();
  };

  const reset = () => {
    SetName('');
    SetNumber('');
  };

  return (
    <form className={s.ContactEntryForm} onSubmit={hendleSubmit}>
      <label className={s.NameInputField}>
        <span className={s.iconForm}>
          <BsFillPersonPlusFill />
        </span>
        <span className={s.inputName}>Name:</span>
        <input
          className={s.ContactInputForm}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          placeholder="Enter contact name"
          required
          onChange={hendleChangeName}
        />
      </label>

      <label className={s.NameInputField}>
        <span className={s.iconForm}>
          <FaPhoneSquareAlt />
        </span>
        <span className={s.inputName}>Number:</span>
        <input
          className={s.ContactInputForm}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          placeholder="Enter contact number"
          required
          onChange={hendleChangeNumber}
        />
      </label>
      <button className={s.btnFormContact} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default DataRecordForm;
