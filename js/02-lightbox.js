import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

galleryList.addEventListener('click', onGalleryItemclick);

const createGalleryCardMarkup = ({ preview, original, description }) => {
    return `
        <li>
            <a class="gallery__item" href=${original}>
                <img class="gallery__image" src=${preview} alt=${description}/>
            </a>
        </li>
        `;        
};


const createGalleryCards = galleryItems.map(createGalleryCardMarkup).join(' ');

galleryList.insertAdjacentHTML('beforeend', createGalleryCards);

function onGalleryItemclick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    } 
}

const gallery = new SimpleLightbox('.gallery li a', {
    captionsData: 'alt',
    });


console.log(galleryItems);
