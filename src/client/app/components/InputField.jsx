import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ title, name, type, field, onChange }) => (
  <div className="field">
    <label htmlFor={name}>{title}</label>
    <input className={field.hasErrors ? 'has-errors' : ''} type={type} name={name} id={name} value={field.value} onChange={onChange} />
  </div>
);

InputField.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  field: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

InputField.defaultProps = {
  type: 'text',
  onChange: undefined,
};

export default InputField;
