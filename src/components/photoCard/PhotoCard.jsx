import React from 'react';
import PropTypes from 'prop-types';
import styles from './photoCard.module.css';

const PhotoCard = ({ data, onZoom }) => (
  <div className={styles.container}>
    <img className={styles.image} src={data.webformatURL} alt={data.tags} />
    <div className={styles.iconsContainer}>
      <p className={styles.description}>
        <i className="material-icons">thumb_up</i>
        {data.likes}
      </p>
      <p className={styles.description}>
        <i className="material-icons">visibility</i>
        {data.views}
      </p>
      <p className={styles.description}>
        <i className="material-icons">comment</i>
        {data.comments}
      </p>
      <p className={styles.description}>
        <i className="material-icons">cloud_download</i>
        {data.downloads}
      </p>
    </div>
    <button
      className={styles.zoomInBtn}
      type="button"
      onClick={() => onZoom(data.id)}
    >
      <i className="material-icons md-18 material-icons-style">zoom_out_map</i>
    </button>
  </div>
);

PhotoCard.propTypes = {
  data: PropTypes.shape().isRequired,
  onZoom: PropTypes.func.isRequired,
};

export default PhotoCard;
