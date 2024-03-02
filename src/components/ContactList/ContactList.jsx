import React, { Component } from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

export class ContactList extends Component {
    static propTypes = {
        onRemove: PropTypes.func,
        contacts: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
          })
        ),
      };

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