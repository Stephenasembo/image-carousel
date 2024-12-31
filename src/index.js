const slidesFrame = document.querySelector('#slidesFrame');
const nextImage = document.querySelector('#next');
const previousImage = document.querySelector('#previous');
const imageNavigation = document.querySelector('#imageNavigation');

let currentImage = 0;
let imagesArray = slidesFrame.querySelectorAll('img');
imagesArray = Array.from(imagesArray);
const imagesNumber = imagesArray.length;

function colorBtn(arr) {
  arr.forEach((element) => {
    const button = element;
    button.style.backgroundColor = 'white';
  });
}

(function displayNavigation() {
  imagesArray.forEach(() => {
    const imageBtn = document.createElement('button');
    imageNavigation.appendChild(imageBtn);
  });
}());

function displayCurrentImage() {
  function navigateImages() {
    let navigationButtons = imageNavigation.querySelectorAll('button');
    navigationButtons = Array.from(navigationButtons);
    navigationButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        currentImage = index;
        displayCurrentImage();
      });
    });
    return navigationButtons;
  }

  const imageSrc = imagesArray[currentImage].src;
  const imageAlt = imagesArray[currentImage].alt;
  const imageWidth = imagesArray[currentImage].width;
  const imageHeight = imagesArray[currentImage].height;
  slidesFrame.innerHTML = `<img src = ${imageSrc} alt = ${imageAlt} width = ${imageWidth} height = ${imageHeight}>`;
  const buttonsArray = navigateImages();
  colorBtn(buttonsArray);
  buttonsArray[currentImage].style.backgroundColor = 'green';
}

function renderInitialImage() {
  currentImage = 0;
  displayCurrentImage();
}
window.addEventListener('load', renderInitialImage);

function renderNextImage() {
  if (currentImage === imagesNumber - 1) {
    return;
  }
  currentImage += 1;
  displayCurrentImage();
}
nextImage.addEventListener('click', renderNextImage);

function renderPreviousImage() {
  if (currentImage === 0) {
    return;
  }
  currentImage -= 1;
  displayCurrentImage();
}
previousImage.addEventListener('click', renderPreviousImage);
