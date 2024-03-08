import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../redux/slices/ContactsSlice';
import styles from './ContactList.module.css';


function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={styles.contact}>
          {contact.name}: {contact.number}
          <button className={styles.button} onClick={() => dispatch(removeContact(contact.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;