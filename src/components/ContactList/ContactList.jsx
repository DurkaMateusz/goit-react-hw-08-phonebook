import React, { Component } from 'react';
import styles from './ContactList.module.css';

export class ContactList extends Component {
    render() {
        const { contacts, onRemove } = this.props;
    
        return (
          <div>
            <ul>
          {contacts.map(contact => (
            <li className={styles.contacts} key={contact.id}>
              {`${contact.name}: ${contact.number}`}
              <button className={styles.btn} onClick={() => onRemove(contact.id)}>Delete</button>
             </li>
          ))}
        </ul>
          </div>
        );
    }
}