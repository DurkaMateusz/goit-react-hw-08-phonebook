import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {
constructor () {
  super();
  this.state = {
    contacts: [],
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

  render(){
    
 return(
  <div>
    <h1>Phonebook</h1>
        <ContactForm
          onAddContact={this.addContact}
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts}/>
  </div>
 )
}
}