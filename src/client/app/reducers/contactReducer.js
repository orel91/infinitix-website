import {
  SENDING_CONTACT_REQUEST,
  SENDING_CONTACT_REQUEST_FAIL,
  SENDING_CONTACT_REQUEST_SUCCESS,
} from './../actions/types/contact';

const initialState = {
  sending: false,
  error: null,
  success: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SENDING_CONTACT_REQUEST:
      return { ...state, sending: true, success: false, error: null };
    case SENDING_CONTACT_REQUEST_SUCCESS:
      return { ...state, sending: false, success: true };
    case SENDING_CONTACT_REQUEST_FAIL:
      return { ...state, sending: false, success: false, error: action.payload };
    default:
      return state;
  }
};
