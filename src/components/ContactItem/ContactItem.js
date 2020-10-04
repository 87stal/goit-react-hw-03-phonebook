import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

const ContactItem = ({id, name, number, onDeleteContact}) => (
    <>
    <span className={styles.contactName}>
      {name}: {number}
    </span>
    <button className={styles.contactDeleteButton} onClick={() => onDeleteContact(id)}>Удалить</button>
 </>
)
ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };

export default ContactItem;