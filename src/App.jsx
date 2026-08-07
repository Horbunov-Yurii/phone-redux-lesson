import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { changeFilter } from "./redux/filterSlice";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  // const [filter, setFilter] = useState(""); 

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

    dispatch(addContact(newContact));
    setName("");
    setNumber("");
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const handledDeleteContacts = (id) => {
    dispatch(deleteContact(id));
  };

  const handledFilterChange = (value) => {
    dispatch(changeFilter(value));
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

      <Filter filter={filter} setFilter={handledFilterChange} />

      <ContactList
        contacts={filteredContacts}
        deleteContact={handledDeleteContacts}
      />
      <p>Кількість контактів: {contacts.length}</p>
    </div>
  );
}

export default App;
