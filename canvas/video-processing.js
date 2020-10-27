const canvas = document.getElementById('drawing');
const context = canvas.getContext('2d');

let width;
let height;

// get ratio of the resolution in physical pixels to the resolution in CSS pixels
let pxScale = window.devicePixelRatio;

let video = document.querySelector('video');

function setup() {
  // fixed canvas size
  width = canvas.width;
  height = canvas.height;

  // set the CSS display size
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';

  // set the number of display pixels, scaled for device resolution
  canvas.width = width * pxScale;
  canvas.height = height * pxScale;

  // normalize the coordinate system
  context.scale(pxScale, pxScale);

  // make sure video begins to play (some browsers disregard autoplay attribute)
  video.play();
}

let imgScale = 10;

function draw() {
  // draw video image, scaled down by a factor of imgScale * pxScale
  context.drawImage(video, 0, 0, 533 / (imgScale * pxScale), 300  / (imgScale * pxScale));

  // access video image data
  let imageData = context.getImageData(0, 0, width/imgScale, height/imgScale);
  let data = imageData.data;

  // clear original video
  context.clearRect(0, 0, width, height);

  for (let y = 0; y < imageData.height - 3; y++) { // sample all but the last three
    for (let x = 0; x < imageData.width - 3; x++) { // sample all but the last three
      let index = (x + y * imageData.width) * 4; // index position of every pixel

      let r = data[index + 0]; // red
      let g = data[index + 1]; // green
      let b = data[index + 2]; // blue
      let a = data[index + 3]; // alpha

      // apply rgb as fill color to subsequent shapes
      context.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ', 0.7)';

      context.save();
      context.translate(x * imgScale, y * imgScale); // drawing coordinate
      context.scale(0.2, 0.2); // scale down to 20%
      // SVG path data for each video pixel
      let path = new Path2D("M 20 40 L 100 20 L 175 125 L 120 180 z");
      // soft-light composite is a combination of multiply and screen
      context.globalCompositeOperation = 'soft-light';
      context.fill(path);
      context.restore();
    }
  }

  requestAnimationFrame(draw);
}

setup();

// wait for video to play before drawing to the canvas
video.addEventListener('play', draw);