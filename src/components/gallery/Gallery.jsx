import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../photoCard/PhotoCard';
import styles from './gallery.module.css';

const Gallery = ({ items, toGetID }) => (
  <ul className={styles.list}>
    {items.map(item => (
      <li className={styles.listItem} key={item.id}>
        <PhotoCard data={item} onZoom={toGetID} />
      </li>
    ))}
  </ul>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  toGetID: PropTypes.func.isRequired,
};

export default Gallery;
