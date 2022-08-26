// const basicLightbox = require('basiclightbox');
// import * as basicLightbox from 'basiclightbox';

import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryList = document.querySelector('.gallery');

galleryList.addEventListener('click', onGalleryItemclick);

const createGalleryCardMarkup = ({ preview, original, description }) => {
    return `
        <div class="gallery__item">
            <a class="gallery__link" href=${original}>
                <img class="gallery__image" src=${preview} data-source=${original} alt=${description}/>
            </a>
        </div>
        `
};

const createGalleryCards = galleryItems.map(createGalleryCardMarkup).join(' ');
galleryList.insertAdjacentHTML('beforeend', createGalleryCards);

function onGalleryItemclick(event) {
    event.preventDefault();
    // console.log("event.target", event.target);
    console.log("event.currentTarget.clientWidth", event.currentTarget.clientWidth);
    if (!event.target.classList.contains('gallery__image')) {
        return;
    } else {
        const imageUrl = event.target.dataset.source;
        console.log("imageUrl", imageUrl);
        const instance = basicLightbox.create(`
            <img src=${imageUrl} width ='1140' height = '600'>
        `);
        instance.show();
    }
}

console.log(galleryItems);
