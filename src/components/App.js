import "./App.css";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactDetail from "./ContactDetail";

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
      <Router>
        <Header />
        <Switch>
          {/* This is one approach not ideal as it re renders complete component we just need to update it */}
          <Route
            path="/"
            exact
            component={() => (
              <ContactList
                contacts={contacts}
                getContactId={handleDeleteContact}
              />
            )}
          />
          {/* This is 2nd approach we should follow this using render prop */}
          <Route
            path="/add"
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />
          <Route path="/contact/:id" component={ContactDetail} />
        </Switch>
      </Router>

      {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={handleDeleteContact} /> */}
    </div>
  );
}

export default App;
