// import { useState } from "react";
// import { nanoid } from "nanoid";
// import useLocalStorage from "hooks/useLocalStorage";
import Section from "components/Section";
import Form from "components/Form";
import Filter from "components/Filter";
import ContactsList from "components/ContactsList";

function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  // const [filter, setFilter] = useState('');

  // function addContact ({ name, number }) {
  //   const newContact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   contacts.some(contact =>
  //     contact.name.toLowerCase() === name.toLowerCase()
  //   )
  //     ? alert(`${name} is already in contacts.`)
  //     : setContacts(contacts => [newContact, ...contacts]);
  // };

  // function changeFilter(e) {
  //   setFilter(e.currentTarget.value);
  // };

  // function onContactDelete(contactId) {
  //   setContacts(contacts => contacts.filter(contact => contact.id !== contactId));
  // };

  // function getVisibleContacts() {
  //   const normalizedFilter = filter.toLocaleLowerCase();
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter) || contact.number.includes(normalizedFilter));
  // };

  return (
    <>
      <Section title={"Phonebook"}>
        <Form />
      </Section>
      <Section title={"Contacts"}>
        <Filter
          // value={filter}
          // onChange={changeFilter}
        />
        <ContactsList
          // contacts={getVisibleContacts()}
          // onContactDelete={onContactDelete}
        />
      </Section>
    </>
  );
};

export default App;