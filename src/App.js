import Section from './components/Section/Section';
import DataRecordForm from './components/DataRecordForm/DataRecordForm';
import Contacts from './components/Contacts/Contacts';
import FilterContact from './components/FilterContact/FilterContact';

function App() {
  return (
    <>
      <Section title="Phonebook">
        <DataRecordForm />
        <h2>Contacts</h2>
        <FilterContact />
        <Contacts />
      </Section>
    </>
  );
}

export default App;
