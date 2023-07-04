import "./App.css";
import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import ContactItem from "./components/ContactItem";

function App() {
  const [contacts, setContacts] = useState([]);

  function addContact(contact) {
    setContacts([...contacts, contact]);
  }

  function deleteContact(id) {
    const newArr = contacts.filter((item) => item.id !== id);
    setContacts(newArr);
  }

  function changeStatus(id) {
    const newArr = contacts.map((item) => {
      if (item.id === id) {
        // item.style.color = "red";
      }
      return item;
    });
    setContacts(newArr);
  }

  return (
    <div className="App">
      <h1>Contact Book</h1>
      <ContactForm addContact={addContact} />
      <ContactList
        deleteContact={deleteContact}
        contacts={contacts}
        changeStatus={changeStatus}
      />
    </div>
  );
}

export default App;
