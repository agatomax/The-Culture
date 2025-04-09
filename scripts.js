document.addEventListener("DOMContentLoaded", function() {
    // Slider Image Logic
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

    // Fade in effect for cards as user scrolls
    window.addEventListener("scroll", function() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            if (card.getBoundingClientRect().top < window.innerHeight) {
                card.classList.add('fadeInUp');
            }
        });
    });
});
