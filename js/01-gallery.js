import { galleryItems } from './gallery-items.js';
let instance = '';

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
    
    if (!event.target.classList.contains('gallery__image')) {
        return;
    } else {
        

        const imageUrl = event.target.dataset.source;
        instance = basicLightbox.create(`
            <img src=${imageUrl} width = '800' height = '600'>
        `,
        { 
            onShow: () => { 
                window.addEventListener('keydown', onEscKeyPress);
            },
            onClose: () => {
                window.removeEventListener('keydown', onEscKeyPress);
            },
        }
        );

        instance.show();
    }
}

function onEscKeyPress(event) {
    console.log("event.key", event.key);
    if(event.key === 'Escape') {
        instance.close(); 
    } 
}

console.log(galleryItems);
