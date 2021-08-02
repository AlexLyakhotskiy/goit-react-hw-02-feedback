import React from 'react';
import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={styles.wrapper}>
    {options.map(item => {
      const buttonName = item[0].toUpperCase() + item.slice(1);
      return (
        <button
          className={styles.button}
          onClick={() => onLeaveFeedback(item)}
          key={item}
          type="button"
        >
          {buttonName}
        </button>
      );
    })}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
