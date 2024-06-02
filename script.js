const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
let currentIndex = 0;
const currentImage = document.getElementById('currentImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

currentImage.src = `images/${images[currentIndex]}`;

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  currentImage.src = `images/${images[currentIndex]}`;
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  currentImage.src = `images/${images[currentIndex]}`;
});
