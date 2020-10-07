let background = document.querySelector('body');
// console.log(background);
let paragraphs = document.querySelectorAll('p');
let subheadings = document.querySelectorAll('h2');
let icon = document.querySelector('.initials');

let mode = 'light';

// console.log(paragraphs);
// console.log(subheadings);

function darkMode() {
  background.style.backgroundColor = 'gray';

  for (let p = 0; p < paragraphs.length; p = p + 1) {
    paragraphs[p].style.color = 'white';
  }

  for (let sh = 0; sh < subheadings.length; sh = sh + 1) {
    subheadings[sh].style.color = 'white';
  }
}

function lightMode() {
  background.style.backgroundColor = '#d8dee6';

  for (let p = 0; p < paragraphs.length; p = p + 1) {
    paragraphs[p].style.color = 'black';
  }

  for (let sh = 0; sh < subheadings.length; sh = sh + 1) {
    subheadings[sh].style.color = 'black';
  }
}

function modeSwitch() {
  if (mode == 'light') {
    darkMode();
    mode = 'dark';
  } else {
    lightMode();
    mode = 'light';
  }
}

icon.addEventListener('click', modeSwitch);

// determine which key was presses and call functions accordingly
function whichKey(event) {
  let key = event.code;
  // console.log(key);
  if (key == 'KeyD') {
    darkMode();
  } else if (key == 'KeyL') {
    lightMode();
  }
}

// listen for key presses
window.addEventListener('keypress', whichKey);