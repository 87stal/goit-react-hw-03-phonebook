import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css'

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className ={styles.contactList}>
    {contacts.map(({ id, name, number }) => (
      <li className ={styles.contactListItem} key={id}>
      <ContactItem
      id={id}
        name={name}
        number={number}
        onDeleteContact={onDeleteContact}
      />
      </li>
    ))}
  </ul>
);
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
