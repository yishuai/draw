const canvas = document.getElementById('drawing');
const context = canvas.getContext('2d');

let width;
let height;

// use img from the DOM
let image = document.querySelector('img');
let color = 0;

function setup() {
  // fixed canvas size
  width = canvas.width;
  height = canvas.height;

  // set the CSS display size
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';

  // set the number of of canvas pixels, scaled for screen resolution
  let scale = window.devicePixelRatio;
  canvas.width = width * scale;
  canvas.height = height * scale;

  // normalize the coordinate system
  context.scale(scale, scale);
}

function draw() {
  // clear canvas
  context.clearRect(0, 0, width, height);

  // draw image to the canvas (image, x, y, width, height)
  context.drawImage(image, 0, 0, 450, 300);

  // drawing an SVG path
  let path = new Path2D("M 20 40 L 100 20 L 175 125 L 120 180 z");
  context.fillStyle = 'hsla(' + color + ', 100%, 50%, 0.6)';
  // pixel compositing
  context.globalCompositeOperation = 'difference';

  context.save(); // save the current coordinate system

  context.scale(1.5, 1.5); // scale up (for the SVG path)
  context.translate(50, 0); // move right (for the SVG path)

  context.fill(path); // draw the path

  context.restore(); // restore the coordinate system

  // draw text to the canvas
  context.font = '44px Helvetica';
  context.textBaseline = 'middle';
  context.textAlign = 'center';
  context.strokeStyle = 'hsla(' + color + ', 100%, 50%, 0.6)';
  context.strokeText('Drawing on the Web', width/2, height/2);

  // reset hue at 360
  if (color >= 360) {
    color = 0;
  }

  // color incrementation
  color += 0.5;

  // recursive function call
  requestAnimationFrame(draw);
};

setup();

// wait for image to load before drawing
image.addEventListener('load', draw);