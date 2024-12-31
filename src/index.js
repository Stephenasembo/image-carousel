const pictureFrame = document.querySelector('#imgFrame');
const slidesFrame = document.querySelector('#slidesFrame');

let imagesArray = slidesFrame.querySelectorAll('img');
imagesArray = Array.from(imagesArray);
function renderInitialImage() {
  const imageSrc = imagesArray[0].src;
  const imageAlt = imagesArray[0].alt;
  const imageWidth = imagesArray[0].width;
  const imageHeight = imagesArray[0].height;
  slidesFrame.innerHTML = `<img src = ${imageSrc} alt = ${imageAlt} width = ${imageWidth} height = ${imageHeight}>`;  
}
window.addEventListener('load', renderInitialImage);
