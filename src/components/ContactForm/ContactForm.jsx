import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from "../../redux/slices/ContactsSlice";
import styles from './ContactForm.module.css';
import { nanoid } from 'nanoid';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ id: nanoid(), name, number }));
    setName('');
    setNumber('');
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