document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector(".image-slider");
    const images = [
        'assets/kendrick-album.jpg',
        'assets/nwa-album.jpg',
        'assets/game-album.jpg'
    ];

    images.forEach(image => {
        let imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = 'Album Art';
        sliderContainer.appendChild(imgElement);
    });
});
