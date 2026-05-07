let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// 5 saniyede bir lokomotif bir sonraki istasyona (slayta) geçer
setInterval(nextSlide, 5000);