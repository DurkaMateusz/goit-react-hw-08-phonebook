import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/mockapi';
import styles from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/selectors';
import PropTypes from 'prop-types';


function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.contact}>
          {contact.name}: {contact.number}
          <button className={styles.button} onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;