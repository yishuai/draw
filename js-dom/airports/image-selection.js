let navImages = document.querySelectorAll('.cloud');
// console.log(navImages);

let mainImage = document.querySelector('.airplane');
// console.log(mainImage);

function lgaImage() {
  mainImage.src = 'images/lga.jpg';
}

function cdgImage() {
  mainImage.src = 'images/cdg.jpg';
}

function nrtImage() {
  mainImage.src = 'images/nrt.jpg';
}

navImages[0].addEventListener('click', lgaImage);
navImages[1].addEventListener('click', cdgImage);
navImages[2].addEventListener('click', nrtImage);