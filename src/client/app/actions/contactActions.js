import {
  SENDING_CONTACT_REQUEST,
  SENDING_CONTACT_REQUEST_FAIL,
  SENDING_CONTACT_REQUEST_SUCCESS,
} from './types/contact';
import { submitContactRequest } from './../api/contact';

const sendingContactRequest = () => ({
  type: SENDING_CONTACT_REQUEST,
});

const sendingContactRequestSuccess = payload => ({
  type: SENDING_CONTACT_REQUEST_SUCCESS,
  payload,
});

const sendingContactRequestFail = error => ({
  type: SENDING_CONTACT_REQUEST_FAIL,
  payload: error,
});

export const sendContactRequest = ({ name, email, message }) => (dispatch) => {
  dispatch(sendingContactRequest());
  submitContactRequest({ name, email, message })
    .then(() => dispatch(sendingContactRequestSuccess()))
    .catch(error => dispatch(sendingContactRequestFail(error)));
};
