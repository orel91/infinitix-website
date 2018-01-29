import React from 'react';
import PropTypes from 'prop-types';

const TextAreaField = ({ title, name }) => (
  <div className="field">
    <label htmlFor={name}>{title}</label>
    <textarea name={name} id={name} rows="4"></textarea>
  </div>
);

TextAreaField.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TextAreaField;
