import { useState, useEffect } from "react";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";

export const App = () => {

  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  // Guardar contactos en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  
  const handleDelete = (id) => {
   
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    
    setContacts(filteredContacts);
  };


  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 32,
        color: '#010101'
      }}
    >
      <h1>Agenda de contactos</h1>
      <ContactForm contacts={contacts} setContacts={setContacts} />

      <h2>Contactos</h2>
      <Filter search={search} setSearch={setSearch} />
      <ContactList contacts={contacts} search={search} handleDelete={handleDelete} />
    </div>
  );
};
