import React from 'react';
import PropTypes from 'prop-types';

import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import CopyrightSection from './CopyrightSection';

const Footer = ({ contact, company, vat }) => (
  <section id="footer">
    <div className="inner" id="contact">
      <h2 className="major">Get in touch</h2>
      <p>Want more info? We would love to hear from you, feel free to contact us!</p>
      <ContactForm />
      <ContactInfo contact={contact} />
      <CopyrightSection company={company} vat={vat} />
    </div>
  </section>
);

Footer.propTypes = {
  contact: PropTypes.object.isRequired,
  company: PropTypes.string.isRequired,
  vat: PropTypes.string.isRequired,
};

export default Footer;
