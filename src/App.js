import Section from './components/Section/Section';
import DataRecordForm from './components/DataRecordForm/DataRecordForm';
import Contacts from './components/Contacts/Contacts';
import FilterContact from './components/FilterContact/FilterContact';

function App() {
  //   const [contacts, setContacts] = useState([]);

  //  useEffect(() => {
  //    const contacts = localStorage.getItem('contacts');
  //    const parselContacts = JSON.parse(contacts);
  //    if (parselContacts) {
  //      setContacts(parselContacts);
  //    }
  //  }, []);

  //  useEffect(() => {
  //    if (contacts) {
  //      localStorage.setItem('contacts', JSON.stringify(contacts));
  //    }
  //  }, [contacts]);

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
