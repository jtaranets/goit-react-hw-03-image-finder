import React from 'react';
import PropTypes from 'prop-types';
import styles from './loadMoreBtn.module.css';

const LoadMoreBtn = ({ onLoadMore }) => (
  <button className={styles.button} type="button" onClick={onLoadMore}>
    Load more
  </button>
);

LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
