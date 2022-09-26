import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

import css from "./ImageGallery.module.css"

const { gallery } = css;

function ImageGallery({items, onClick}) {
  // console.log('items', items)
  // const element = items.map(({id, webformatURL, largeImageURL })=>{
  //   return (<li key={id}>
  //     <img src={webformatURL} alt={largeImageURL} />
  //   </li>)
  // })
  return (
    <ul className={gallery}>
      {/* {element} */}
      <ImageGalleryItem items={items} onClick={onClick} />
      {/* Набір <li> із зображеннями */}
    </ul>
  ) 
}

export default ImageGallery