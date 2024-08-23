function loadGallery() {
    const galleryContainer = document.getElementById('gallery');
    const imageCount = 20;
    const imagePath = '../Assets/images/furniture/'; 

    for (let i = 1; i <= imageCount; i++) {
        const imgElement = document.createElement('img');
        imgElement.src = `${imagePath}image${i}.jpg`;
        imgElement.alt = `Mueble ${i}`;
        imgElement.className = 'gallery-item';
        galleryContainer.appendChild(imgElement);
    }
}

document.addEventListener('DOMContentLoaded', loadGallery);

document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery img');

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            const src = image.getAttribute('src');
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <span class="close">&times;</span>
                <img src="${src}" class="modal-content">
            `;
            document.body.appendChild(modal);

            const close = document.querySelector('.modal .close');
            close.addEventListener('click', () => {
                document.body.removeChild(modal);
            });
        });
    });
});
