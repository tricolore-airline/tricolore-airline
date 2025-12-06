const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let index = 0;

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % images.length;
    slide.style.transform = `translateX(${-index * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    slide.style.transform = `translateX(${-index * 100}%)`;
});
