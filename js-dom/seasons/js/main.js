/*
Dark Mode for Seasons Home Page
*/

let hour = new Date().getHours(); // get current hour
// console.log(hour); // display current hour in the web console

if (hour >= 18 || hour < 6) { // between 6:00 PM and 6:00 AM
// if (hour > 6) { // testing dark mode during the day
  const background = document.querySelector('body'); // access <body> element
  background.style.backgroundColor = 'black'; // change background color to white with style object
  background.style.color = 'white'; // change default font color of all child elements to white

  const header = document.querySelector('h1 > a'); // access <a> element of main heading
  header.className = 'dark'; // apply class of "dark" (see style sheet)

  const navigation = document.querySelectorAll('nav > a'); // access <a> elements of primary navigation
  
  navigation[0].className = 'dark'; // spring
  navigation[1].className = 'dark'; // summer
  navigation[2].className = 'dark'; // fall
  navigation[3].className = 'dark'; // winter

  const footer = document.querySelector('footer > p > a') // access <a> element of footer paragraph
  footer.className = 'dark'; // apply class of "dark"
}

/*
Changing Image Opacity
*/

let images = document.querySelectorAll('main > a > img');
// console.log(images);

function changeOpacity() {
  images[0].style.opacity = '0.5'; // change opacity of each image
  images[1].style.opacity = '0.5';
  images[2].style.opacity = '0.5';
  images[3].style.opacity = '0.5';

  this.style.opacity = '1'; // keep current image opaque
  // in event handlers, "this" refers to the HTML element that received the event
  // console.log(this);
}

function resetOpacity() {
  images[0].style.opacity = '1'; // reset opacity of each image
  images[1].style.opacity = '1';
  images[2].style.opacity = '1';
  images[3].style.opacity = '1';
}

// event listeners for hover on
images[0].addEventListener('mouseover', changeOpacity);
images[1].addEventListener('mouseover', changeOpacity);
images[2].addEventListener('mouseover', changeOpacity);
images[3].addEventListener('mouseover', changeOpacity);

// event listeners for hover off
images[0].addEventListener('mouseout', resetOpacity);
images[1].addEventListener('mouseout', resetOpacity);
images[2].addEventListener('mouseout', resetOpacity);
images[3].addEventListener('mouseout', resetOpacity);