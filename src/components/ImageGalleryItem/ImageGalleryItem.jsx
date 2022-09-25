import css from './ImageGalleryItem.module.css'

const { item, image } = css;

function ImageGalleryItem({ items }) {
    console.log('items', items)

  return (
    items.map(({ id, webformatURL, largeImageURL }) => 
    <li key={id} className={item}>
        <img className={image} src={webformatURL} alt={largeImageURL} />
      </li>
    ))
}

export default ImageGalleryItem