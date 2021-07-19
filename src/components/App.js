import "./App.css";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import { useState, useEffect } from "react";
import { uuid } from "uuidv4";

function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_CONTACT = "contacts";

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const handleDeleteContact = (id) => {
    const filteredContacts = contacts.filter((x) => x.id !== id);
    setContacts(filteredContacts);
  };

  useEffect(() => {
    const retrievedContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_CONTACT)
    );
    if (retrievedContacts) setContacts(retrievedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_CONTACT, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={handleDeleteContact} />
    </div>
  );
}

export default App;
