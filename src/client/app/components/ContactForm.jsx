import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { sendContactRequest } from './../actions/contactActions';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import { getEmailValidation, getMessageValidation, getNameValidation } from './../validations';

class ContactForm extends Component {
  defaultField = { value: '', valid: false, hasErrors: false };
  state = {
    name: { ...this.defaultField },
    email: { ...this.defaultField },
    message: { ...this.defaultField },
    formErrors: { name: '', email: '', message: '' },
    formValid: false,
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.sending && this.props.sending && nextProps.success !== this.props.success) {
      if (nextProps.success) {
        window.alert('Message sent with success!');
      } else {
        window.alert('There was an error sending your message.');
      }
    }
  }

  getValidation = (fieldName, value) => {
    switch (fieldName) {
      case 'email':
        return getEmailValidation(value);
      case 'name':
        return getNameValidation(value);
      case 'message':
        return getMessageValidation(value);
      default:
        return null;
    }
  };

  handleUserInput = (e) => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: {
          ...this.state[name],
          value,
        },
      },
      () => this.validateField(name, value),
    );
  };

  validateField = (fieldName, value) => {
    const validation = this.getValidation(fieldName, value);
    this.setState({
      formErrors: {
        ...this.state.formErrors,
        [fieldName]: validation.error,
      },
      [fieldName]: {
        ...this.state[fieldName],
        valid: validation.isValid,
        hasErrors: !validation.isValid,
      },
    }, this.validateForm);
  };

  validateForm() {
    const { email, message, name } = this.state;
    this.setState({ formValid: email.valid && message.valid && name.valid });
  }

  send = (event) => {
    event.preventDefault();
    const { name, email, message, formValid } = this.state;
    const { sendRequest } = this.props;

    if (!formValid) {
      return;
    }
    sendRequest({ name: name.value, email: email.value, message: message.value });
    this.setState({
      name: { ...this.defaultField },
      email: { ...this.defaultField },
      message: { ...this.defaultField },
    });
  }

  render() {
    const { name, email, message, formValid } = this.state;
    const { sending } = this.props;
    const buttonText = sending ? 'Sending...' : 'Send Message';
    return (
      <form id="contact-form" method="post" action="#" onSubmit={this.send}>
        <InputField title="Name" name="name" field={name} onChange={this.handleUserInput} />
        <InputField title="Email" name="email" type="email" field={email} onChange={this.handleUserInput} />
        <TextAreaField title="Message" name="message" field={message} onChange={this.handleUserInput} />
        <ul className="actions">
          <li><input type="submit" value={buttonText} disabled={!formValid || sending} /></li>
        </ul>
      </form>
    );
  }
}

ContactForm.propTypes = {
  sendRequest: PropTypes.func.isRequired,
  sending: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ contact }) => ({
  sending: contact.sending,
  success: contact.success,
});

export default connect(mapStateToProps, {
  sendRequest: sendContactRequest,
})(ContactForm);
