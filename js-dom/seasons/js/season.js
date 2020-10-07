/*
Dark Mode for Seasons Pages
*/

let hour = new Date().getHours(); // get current hour
console.log(hour); // display current hour in the web console

if (hour >= 18 || hour < 6) { // between 6:00 PM and 6:00 AM
// if (hour > 6) { // testing dark mode during the day
  const background = document.querySelector('body'); // access <body> element
  background.style.backgroundColor = 'black'; // change background color to white with style object
  background.style.color = 'white'; // change default font color of all child elements to white

  const header = document.querySelector('h1 > a'); // access <a> element of main heading
  header.className = 'dark'; // apply class of "dark" (see style sheet)

  const navigation = document.querySelectorAll('nav > a'); // access <a> elements of primary navigation
  
  if (navigation[0].className != 'selected') { // if the element does not already have a class of "selected"
    navigation[0].className = 'dark'; // apply class of "dark"
  }
  
  if (navigation[1].className != 'selected') {
    navigation[1].className = 'dark';
  }

  if (navigation[2].className != 'selected') {
    navigation[2].className = 'dark';
  }

  if (navigation[3].className != 'selected') {
    navigation[3].className = 'dark';
  }

  const footer = document.querySelector('footer > p > a') // access <a> element of footer paragraph
  footer.className = 'dark'; // apply class of "dark"
}