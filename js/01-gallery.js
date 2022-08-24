import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallaryList = document.querySelector('.gallery');

const createGalaryCardMarkup = ({ preview, original, description }) => {
    return `
        <div class="gallery__item">
            <a class="gallery__link" href=${preview}>
                <img class="gallery__image" src=${preview} data-source=${original} alt=${description}/>
            </a>
        </div>
        ` 
    };
    
const createGalaryCards = galleryItems.map(createGalaryCardMarkup).join(' ');
gallaryList.insertAdjacentHTML('beforeend', createGalaryCards);


console.log(galleryItems);
