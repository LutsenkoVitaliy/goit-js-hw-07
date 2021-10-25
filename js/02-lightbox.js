import { galleryItems } from './gallery-items.js';
// Change code below this line



const renderGallery = items => {
  const { preview, original, description } = items;
    
  return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  `;
};
const galleryRef = document.querySelector('.gallery')

const imgGalleryEl = galleryItems.map(renderGallery).join('') 
galleryRef.insertAdjacentHTML('beforeend', imgGalleryEl)

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, captionPosition: 'bottom'});
console.log(galleryItems);