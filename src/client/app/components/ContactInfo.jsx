import React from 'react';
import PropTypes from 'prop-types';

const ContactInfo = ({ contact }) => {
  const { address } = contact;
  return (
    <ul className="contact">
      <li className="fa-home">
        {address.company}<br />
        {address.street}<br />
        {address.postalCode} {address.city}<br />
        {address.country}
      </li>
      <li className="fa-phone">{contact.phone}</li>
      <li className="fa-envelope">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </li>
      <li className="fa-twitter">
        <a href={contact.twitter.url} target="_blank" rel="noopener noreferrer">{contact.twitter.title}</a>
      </li>
      <li className="fa-facebook">
        <a href={contact.facebook.url} target="_blank" rel="noopener noreferrer">{contact.facebook.title}</a>
      </li>
    </ul>
  );
};

ContactInfo.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactInfo;
