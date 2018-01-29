import React from 'react';
import PropTypes from 'prop-types';

import SectionItem from './SectionItem';

const Sections = ({ sections }) => (
  <section id="wrapper">
    {sections.map(section => <SectionItem key={section.id} section={section} />)}
  </section>
);

Sections.propTypes = {
  sections: PropTypes.array.isRequired,
};

export default Sections;
