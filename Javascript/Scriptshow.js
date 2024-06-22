// slideshow
const slideContainer = document.querySelector('.carousel-slide');
const slides = Array.from(slideContainer.getElementsByTagName('img'));
const navButtons = Array.from(document.querySelectorAll('.carousel-navigation button'));

let currentIndex = 0;

function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
    
    navButtons.forEach(button => button.classList.remove('active'));
    navButtons[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function previousSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

navButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

showSlide(currentIndex);
setInterval(nextSlide, 3000);