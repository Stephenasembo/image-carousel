const slidesFrame = document.querySelector('#slidesFrame');
const nextImage = document.querySelector('#next');
const previousImage = document.querySelector('#previous');

let currentImage = 0;
let imagesArray = slidesFrame.querySelectorAll('img');
imagesArray = Array.from(imagesArray);
function renderInitialImage() {
  const imageSrc = imagesArray[currentImage].src;
  const imageAlt = imagesArray[currentImage].alt;
  const imageWidth = imagesArray[currentImage].width;
  const imageHeight = imagesArray[currentImage].height;
  slidesFrame.innerHTML = `<img src = ${imageSrc} alt = ${imageAlt} width = ${imageWidth} height = ${imageHeight}>`;
}
window.addEventListener('load', renderInitialImage);

function renderNextImage() {
  currentImage += 1;
  const imageSrc = imagesArray[currentImage].src;
  const imageAlt = imagesArray[currentImage].alt;
  const imageWidth = imagesArray[currentImage].width;
  const imageHeight = imagesArray[currentImage].height;
  slidesFrame.innerHTML = `<img src = ${imageSrc} alt = ${imageAlt} width = ${imageWidth} height = ${imageHeight}>`;
}
nextImage.addEventListener('click', renderNextImage);

function renderPreviousImage() {
  currentImage -= 1;
  const imageSrc = imagesArray[currentImage].src;
  const imageAlt = imagesArray[currentImage].alt;
  const imageWidth = imagesArray[currentImage].width;
  const imageHeight = imagesArray[currentImage].height;
  slidesFrame.innerHTML = `<img src = ${imageSrc} alt = ${imageAlt} width = ${imageWidth} height = ${imageHeight}>`;
}
previousImage.addEventListener('click', renderPreviousImage);
