import React from 'react';
import PropTypes from 'prop-types';

const TextAreaField = ({ title, name, field, onChange }) => (
  <div className="field">
    <label htmlFor={name}>{title}</label>
    <textarea className={field.hasErrors ? 'has-errors' : ''} name={name} id={name} rows="4" onChange={onChange} value={field.value} />
  </div>
);

TextAreaField.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

TextAreaField.defaultProps = {
  onChange: undefined,
};

export default TextAreaField;
