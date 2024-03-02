import React, { Component } from 'react';
import styles from "./ContactForm.module.css"
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default class ContactForm extends Component {
    static propTypes = {
        onAddContact: PropTypes.func,
        contacts: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
          })
        ),
      };
    
    state = {
        name: '',
        number: '',
    }

    loginInputId = nanoid();

    handleChange = evt => {
        const { name, value } = evt.target;
        this.setState({ [name]: value });
      };

    handleSubmit = evt => {
        evt.preventDefault();
        const newContact = {
            id: nanoid(),
          name: this.state.name,
          number: this.state.number,
        }
        
        const isDuplicate = this.props.contacts.some(
            contact =>
              contact.name.toLowerCase() === this.state.name.toLowerCase() ||
              contact.number === this.state.number
          );
      
          if (isDuplicate) {
            alert('Contact with the same name or number already exists!');
            return;
          }
          this.setState({ name: '', number: '' });
    
        if (this.props.onAddContact) {
            this.props.onAddContact(newContact);
          }
          
        }
    
    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit} className={styles.form}>
              <div className={styles.inputWrapper}>
              <label className={styles.lbl}>
            Name
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              pattern="[a-zA-Z \-']{2,30}"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.state.name}
              required
            />
          </label>
          <div className={styles.inputWrapper}>
          <label className={styles.lbl}>
            Number
            <input
              onChange={this.handleChange}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="^\+?[0-9 \-\(\)]{7,20}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          </div>
              </div>
    
              <button type="submit">Add contact</button>
            </form>
          </div>
        );
      }
}