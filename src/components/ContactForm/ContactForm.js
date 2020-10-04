import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
 
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    // Проп который передается форме для вызова при сабмите
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.formSubmit} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            className={styles.formSubmitInput_name}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            className={styles.formSubmitInput_number}
            type="number"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.formSubmitButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
