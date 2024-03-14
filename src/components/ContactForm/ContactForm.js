import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import './ContactForm.css';
import { Notify } from 'notiflix';
import { selectContacts } from '../../redux/selectors';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts)

  const checkDuplicate = value =>
    contacts.some(({ number }) => number === value);

    const handleSubmit = async event => {
      event.preventDefault();
      if (checkDuplicate(number)) {
        Notify.warning(`This number '${number}' already exists`);
      } else {
        try {
          await dispatch(addContact({ name, number }));
          setName('');
          setNumber('');
        } catch (error) {
          console.error('Error while adding contact:', error.message);
        }
      }
    };


  return (
    <form onSubmit={handleSubmit} className="contactForm">
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="tel"
        value={number}
        onChange={e => setNumber(e.target.value)}
        placeholder="Number"
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;