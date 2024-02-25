import { useEffect, useState } from 'react';
import ContactForm from './Contact_Form/Conatact_Form';
import { nanoid } from 'nanoid';
import ContactsList from './Contacts_List/Contacts_List';
import Filter from './Filter/Filter';
const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    const contactsFromLocalStorage = localStorage.getItem('contacts');
    return contactsFromLocalStorage ? JSON.parse(contactsFromLocalStorage) : [];
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const nameInLowerCase = contact.name.toLowerCase().trim();
    const isExist = contacts.some(
      ({ name }) => name.toLowerCase().trim() === nameInLowerCase
    );
    if (isExist) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    setContacts(prev => [...prev, { ...contact, id: nanoid() }]);
  };
  const handleRemoveContact = contactId => {
    setContacts(prev => prev.filter(({ id }) => id !== contactId));
  };
  const filterOnChangeHandler = ({ target: { value } }) => {
    setFilter(value);
  };
  const filterContacts = () => {
    const normalValue = filter.toLowerCase().trim();
    return contacts?.filter(({ name }) =>
      name.toLowerCase().includes(normalValue)
    );
  };
  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={addContact} />
      <h3>Contacts</h3>
      <div>
        <p>Find contacts by name</p>
        <Filter onFilterChange={filterOnChangeHandler} />
      </div>
      {
        <ContactsList
          contacts={filterContacts()}
          onRemove={handleRemoveContact}
        />
      }
    </>
  );
};
export default App;
