import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css'

const ContactFilter = ({ filter, onFilterChange }) => (
  <>
  <h3 className={styles.filterTitle}>Find contact by name</h3>
  <input className= {styles.filterInput} type="text" value={filter} onChange={onFilterChange} autoFocus />
  </>
);
ContactFilter.defaultProps = {
    filter: '',
  };
ContactFilter.propTypes = {
    filter: PropTypes.string,
    onFilterChange: PropTypes.func.isRequired,
  };
export default ContactFilter;