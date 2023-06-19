import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryListEl = document.querySelector('.gallery');
const imgCardsMarkup = onCreateGalleryItem(galleryItems);
galleryListEl.insertAdjacentHTML('beforeend', imgCardsMarkup);

function onCreateGalleryItem(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
      <li>
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>   
    `;
  }).join('');
}


const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250
});

