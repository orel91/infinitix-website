import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ title, name, type }) => (
  <div className="field">
    <label htmlFor={name}>{title}</label>
    <input type={type} name={name} id={name} />
  </div>
);

InputField.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

InputField.defaultProps = {
  type: 'text',
};

export default InputField;
