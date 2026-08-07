import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

function App() {

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const isExist = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number,
    };

    setContacts([...contacts, newContact]);
    setName("");
    setNumber("");
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      <ContactForm
        name={name}
        number={number}
        handleSubmit={handleSubmit}
        setName={setName}
        setNumber={setNumber}
      />

      <h2>Contacts</h2>

      <Filter filter={filter} setFilter={setFilter} />

      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
      <p>Кількість контактів: {contacts.length}</p>
    </div>
  );
}

export default App;
