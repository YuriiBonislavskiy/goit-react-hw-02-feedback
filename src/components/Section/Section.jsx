import PropTypes from 'prop-types';

export const Section = ({ title, child }) => {
  //   console.log(child);
  return (
    <section>
      <h2>{title}</h2>
      {child}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  child: PropTypes.shape(),
};
