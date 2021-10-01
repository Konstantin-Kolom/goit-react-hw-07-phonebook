import React, { useEffect, useState } from 'react';
import shortid from 'shortid';

import Section from './components/Section/Section';
import DataRecordForm from './components/DataRecordForm/DataRecordForm';
import Contacts from './components/Contacts/Contacts';
import FilterContact from './components/FilterContact/FilterContact';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const formSubmit = data => {
    const contact = { id: shortid.generate(data.name), name: data.name, number: data.number };

    if (contacts.find(el => el.name.toLowerCase() === contact.name.toLowerCase())) {
      return alert(`${contact.name} is alresdy in contacts`);
    } else setContacts([contact, ...contacts]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const normalizeFilter = filter.toLowerCase();

  const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter),
  );

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parselContacts = JSON.parse(contacts);
    if (parselContacts) {
      setContacts(parselContacts);
    }
  }, []);

  useEffect(() => {
    if (contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <>
      <Section title="Phonebook">
        <DataRecordForm onFormSubmit={formSubmit} />
        <h2>Contacts</h2>
        <FilterContact value={filter} onchangeFilter={changeFilter} />
        <Contacts stateApp={visibleContact} onDeleteContact={deleteContact} />
      </Section>
    </>
  );
}

export default App;
