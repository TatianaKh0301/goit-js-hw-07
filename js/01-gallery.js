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
    

console.log(createGalaryCardMarkup(galleryItems[0]));
console.log(galleryItems);
