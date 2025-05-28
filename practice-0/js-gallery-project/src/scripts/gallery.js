// This file contains the JavaScript logic for the gallery. It imports the galleryItems array, renders the gallery markup, implements event delegation for opening the modal, and handles image navigation and closing the modal.

const galleryItems = [
    {
        preview: '.practice-0/src/img/images.jpg',
        original: '.practice-0/src/img/images.jpg',
        description: 'Image 1 Description',
    },
    {
        preview: '.practice-0/src/img/images.jpg',
        original: '.practice-0/src/img/images.jpg',
        description: 'Image 2 Description',
    },
    {
        preview: '..practice-0/src/img/images.jpg',
        original: '..practice-0/src/img/images.jpg',
        description: 'Image 3 Description',
    },
    // Add more images as needed
];

const galleryContainer = document.querySelector('.gallery');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal__image');
const modalDescription = document.querySelector('.modal__description');
const closeModalButton = document.querySelector('.modal__close');

function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
            <div class="gallery__item">
                <img src="${preview}" data-original="${original}" alt="${description}" class="gallery__image" />
            </div>
        `;
    }).join('');
}

function openModal(event) {
    const target = event.target;
    if (target.classList.contains('gallery__image')) {
        const originalSrc = target.dataset.original;
        const description = target.alt;

        modalImage.src = originalSrc;
        modalDescription.textContent = description;
        modal.classList.add('is-open');
    }
}

function closeModal() {
    modal.classList.remove('is-open');
    modalImage.src = '';
    modalDescription.textContent = '';
}

function handleKeyPress(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}

galleryContainer.innerHTML = createGalleryMarkup(galleryItems);
galleryContainer.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
window.addEventListener('keydown', handleKeyPress);