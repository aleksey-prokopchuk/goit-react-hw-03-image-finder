import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const { item, image } = css;

function ImageGalleryItem({ items, onClick }) {
  return (
    items.map(({ id, webformatURL, largeImageURL, tags }) =>
      <li key={id} className={item} onClick={() => onClick({ largeImageURL, tags })}>
        <img className={image} src={webformatURL} alt={tags} />
      </li>
    ));
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};