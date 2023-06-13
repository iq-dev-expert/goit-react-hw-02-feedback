import PropTypes from 'prop-types';
import { Text } from './Section.styled';

function Section({ title, children }) {
  return (
    <section>
      {title && <Text>{title}</Text>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
