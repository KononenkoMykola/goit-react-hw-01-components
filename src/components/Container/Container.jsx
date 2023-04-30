import PropTypes from 'prop-types';

import css from './Container.module.css';

export const Container = ({ title, children }) => {
  return (
    <section className={css.container}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
};

Container.protoType = {
  title: PropTypes.string.isRequired,
};