export const isEmailValid = value => value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
export const isNotEmpty = value => value !== undefined && value !== null && value !== '';

const getValidationMessage = (isValid, message) => ({
  isValid,
  error: isValid ? '' : message,
});

export const getEmailValidation = value => getValidationMessage(isEmailValid(value), 'Your email is invalid');
export const getNameValidation = value => getValidationMessage(isNotEmpty(value), 'You must provide a name');
export const getMessageValidation = value => getValidationMessage(isNotEmpty(value), 'You must write a message');
