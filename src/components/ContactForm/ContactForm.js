import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/mockapi';
import styles from './ContactForm.module.css';
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
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="" className={styles.label}>
          Name
      <input
        className={styles.login}
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        required
      />
      </label>
      <label htmlFor="" className={styles.label}>
          Number
      <input
        className={styles.login}
        type="tel"
        value={number}
        onChange={e => setNumber(e.target.value)}
        placeholder="Number"
        required
      />
      </label>
      <button className={styles.button} type="submit">Add Contact</button>
    </form>
    </div>
  );
}

export default ContactForm;