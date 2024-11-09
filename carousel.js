let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const newTransformValue = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTransformValue}%)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}
function startSlideShow() {
    slideInterval = setInterval(() => {
        moveSlide(1);
    }, 5000); 
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    startSlideShow();

    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseover', stopSlideShow);
    carousel.addEventListener('mouseleave', startSlideShow);
});
