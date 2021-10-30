import { galleryItems } from './gallery-items.js';
// Change code below this line
let currentIndex = 0
const renderGallery = (items, index) => {
  const { preview, original, description } = items;
    console.log(index);
  return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-index="${index}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </div>
  `;
};
const galleryRef = document.querySelector('.gallery')

const imgGalleryEl = galleryItems.map(renderGallery).join('') 
galleryRef.insertAdjacentHTML('beforeend', imgGalleryEl)
const options = {
    onShow: (instance) => {
        window.addEventListener("keydown", onEscPress);
        console.log("add");
    },

    onClose: (instance) => {
        window.removeEventListener("keydown", onEscPress);
        console.log("remove");
    }

}
const instance = basicLightbox.create(
        `<img src="" width="800" height="600">`, options
)
    
galleryRef.addEventListener('click', event => {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return
    };
    
    let srcLink = event.target.getAttribute("data-source");
    setOriginalURL(srcLink);
    currentIndex = Number(event.target.getAttribute("data-index"));
    instance.show();
    
   
});

function setOriginalURL(url) {
    instance.element().querySelector("img").src = url
}


function onEscPress({ key }) {
    switch (key) {
        case "ArrowRight":
            currentIndex += 1
        if (currentIndex >= galleryItems.length) {
            currentIndex = 0
        }
        setOriginalURL(galleryItems[currentIndex].original)
            break;
        case "ArrowLeft":
            currentIndex -= 1
            if (currentIndex <= 0) {
                currentIndex = galleryItems.length - 1
            }
            setOriginalURL(galleryItems[currentIndex].original)
            break;
        case "Escape":
            instance.close();
            break;
        
        default:
            break;
    }
    }

// function onEscPress (evt) {
//     if (evt.key === "Escape") {
//         instance.close();
//     };
//     if (evt.key === "ArrowRight") {
//         currentIndex += 1
//         if (currentIndex >= galleryItems.length) {
//             currentIndex = 0
//         }
//         instance.element().querySelector("img").src = galleryItems[currentIndex].original
//         console.log("right");
//     };
//     if (evt.key === "ArrowLeft") {
//         currentIndex -= 1
//         if (currentIndex <= 0) {
//             currentIndex = galleryItems.length-1
//         }
//         instance.element().querySelector("img").src = galleryItems[currentIndex].original
//         console.log("Left");
//     }
//     }

