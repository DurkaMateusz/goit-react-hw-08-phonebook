import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import styles from './App.module.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/mockapi';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;