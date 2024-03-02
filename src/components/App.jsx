import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export class App extends Component {
constructor () {
  super();
  this.state = {
    contacts: [],
    filter: '',
  }
}

handleChange = evt => {
  const { name, value } = evt.target;
  this.setState({ [name]: value });
};

addContact = newContact => {
  this.setState(prevState => ({
    contacts: [...prevState.contacts, newContact],
  }));
}

filteredContacts = () => {
  return this.state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
  );
};

removeContact = id => {
  const newList = this.state.contacts.filter(contact => contact.id !== id);
  this.setState({ contacts: newList });
};

  render(){
    
 return(
  <div>
    <h1>Phonebook</h1>
        <ContactForm
          onAddContact={this.addContact}
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleChange} />
        <ContactList 
        contacts={this.filteredContacts()}
        onRemove={this.removeContact}
        />
  </div>
 )
}

componentDidMount() {
  if (localStorage.getItem('contacts')) {
    this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
}