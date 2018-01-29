import React from 'react';
import PropTypes from 'prop-types';

const CopyrightSection = ({ company, vat }) => (
  <ul className="copyright">
    <li>&copy; {company}. All rights reserved.</li>
    <li>TVA: {vat}</li>
    <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
  </ul>
);

CopyrightSection.propTypes = {
  company: PropTypes.string.isRequired,
  vat: PropTypes.string.isRequired,
};

export default CopyrightSection;
