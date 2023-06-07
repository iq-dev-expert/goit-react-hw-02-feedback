import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <section>
      {title && <p>{title}</p>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
