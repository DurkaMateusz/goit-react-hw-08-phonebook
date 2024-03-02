import React, { Component } from 'react';

export class ContactList extends Component {
    render() {
        const { contacts } = this.props;
    
        return (
          <div>
            <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {`${contact.name}: ${contact.number}`}
             </li>
          ))}
        </ul>
          </div>
        );
    }
}