import axios from 'axios';

export const submitContactRequest = ({ name, email, message }) =>
  axios.post('/api/contact', {
    name,
    email,
    message,
  }, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
