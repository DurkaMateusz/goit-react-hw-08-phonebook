import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/slices/ContactsSlice';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';
import { selectFilter } from '../../redux/selectors';


function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        Find
        <input
        className={styles.input}
          type="text"
          value={filter}
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;