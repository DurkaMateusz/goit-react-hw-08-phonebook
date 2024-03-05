import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export default function App () {
  const [contacts, setContacts] = useState((JSON.parse(localStorage.getItem("contacts")) || []));
  const [ filter, setFilter] = useState('');

const handleChange = evt => {
  const { value } = evt.target;
  setFilter(value);
};

const removeContact = id => {
  const newList = contacts.filter(contact => contact.id !== id);
  setContacts(newList);
  updateContacts(newList);
};

const addContact = newContact => {
  setContacts(prevContacts => [...prevContacts, newContact]);
  updateContacts([ ...contacts, newContact]);
}

const filteredContacts = () => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())

  );
};

const updateContacts = contacts => {
  try {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    } catch (error){
    console.error('Set state error: ', error.message);
    };
}

useEffect(() => {
  localStorage.setItem("contacts", JSON.stringify(contacts)); 
}, [contacts]);
   
 return(
  <div>
    <h1>Phonebook</h1>
        <ContactForm
          onAddContact={addContact}
          contacts={contacts}
        />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleChange} />
        <ContactList 
        contacts={filteredContacts()}
        onRemove={removeContact}
        />
  </div>
 );
}
