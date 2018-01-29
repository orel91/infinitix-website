import React from 'react';

import InputField from './InputField';
import TextAreaField from './TextAreaField';

const ContactForm = () => (
  <form id="contact-form" method="post" action="#">
    <InputField title="Name" name="name" />
    <InputField title="Email" name="email" type="email" />
    <TextAreaField title="Message" name="message" />
    <ul className="actions">
      <li><input type="submit" value="Send Message" /></li>
    </ul>
  </form>
);

export default ContactForm;
