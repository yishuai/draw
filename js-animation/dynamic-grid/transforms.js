/*
网格形状的动态变换
- 映射到光标移动
- 缩放到浏览器窗口
*/

const squares = document.querySelectorAll('.square');
let xBrowserRatio;
let yBrowserRatio;

function scaleRatio() {
  let browserWidth = window.innerWidth;
  let browserHeight = window.innerHeight;

  xBrowserRatio = browserWidth / 120; // not a full 180 deg rotation
  yBrowserRatio = browserHeight / 120; // not a full 180 deg rotation
}

function mousePosition(event) {
  let xPos = event.clientX; // get cursor X position
  let yPos = event.clientY; // get cursor Y position

  updateRotation(xPos, yPos);
}

function updateRotation(xPos, yPos) {
  // map horizontal rotation to X position relative to browser width
  let xRotation = 60 - Math.ceil(yPos / yBrowserRatio); // half the scaled rotation value
  console.log('X rotation: ' + xRotation); // 0 deg rotation at page center

  // map vertical rotation to Y position relative to browser height
  let yRotation = -60 + Math.ceil(xPos / xBrowserRatio); // half the scaled rotation value
  console.log('Y rotation: ' + yRotation); // 0 deg rotation at page center

  // set perspective of shapes
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.transform = 'rotateX(' + xRotation + 'deg)' + ' ' + 'rotateY(' + yRotation + 'deg)';
  }
}

// update scale when the page loads
window.addEventListener('load', scaleRatio);

// update scale when the window is resized
window.addEventListener('resize', scaleRatio);

// detect mouse movements
window.addEventListener('mousemove', mousePosition);