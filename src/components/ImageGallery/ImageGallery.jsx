import PropTypes from 'prop-types';
import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import css from "./ImageGallery.module.css";

const { gallery } = css;

function ImageGallery({items, onClick}) {
  return (
    <ul className={gallery}>
      <ImageGalleryItem items={items} onClick={onClick} />
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};