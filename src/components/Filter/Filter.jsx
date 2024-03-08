import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/slices/ContactsSlice';
import styles from './Filter.module.css';


function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        Find
        <input
        className={styles.input}
          type="text"
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
        />
      </label>
    </div>
  );
}


export default Filter;