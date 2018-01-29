import React from 'react';
import PropTypes from 'prop-types';

const renderLink = (link) => {
  if (!link) {
    return null;
  }
  return (
    <a href={link.url} className="button">{link.title}</a>
  );
};

const SectionItem = ({ section }) => (
  <section id={section.id} className={section.class}>
    <div className="inner">
      <a href="#" className="image"><img src={`images/${section.image}`} alt="" /></a>
      <div className="content">
        <h2 className="major">{section.title}</h2>
        <p>{section.content}</p>
        {renderLink(section.link)}
      </div>
    </div>
  </section>
);

SectionItem.propTypes = {
  section: PropTypes.object.isRequired,
};

export default SectionItem;
