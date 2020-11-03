let camera, scene, renderer, controls, mesh;

let image = document.querySelector('.height-map');

if (image) {
  init()
} else {
  image.addEventListener('load', init);
}

function init() {
  scene = new THREE.Scene();

  let width = window.innerWidth;
  let height = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, width/height, 1, 25000);
  camera.position.set(0, 300, 700);
  scene.add(camera);

  let light = new THREE.DirectionalLight(0xfffffff, 1); // color, intensity
  light.position.set(1, 1, 1); // location x, y, z
  scene.add(light);

  // linear fog
  scene.fog = new THREE.Fog(0xffffff, 1, 1000);

  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);

  terrain();
}

function heightMap() {
  const canvas = document.getElementById('drawing');
  const context = canvas.getContext('2d');

  canvas.width = 200;
  canvas.height = 200;

  context.drawImage(image, 0, 0, 200, 200);

  let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  // console.log('Width:', imageData.width);
  // console.log('Height:', imageData.height);

  let data = imageData.data;
  // console.log(data);

  return data;
}

function terrain() {
  data = heightMap();

  let loader = new THREE.TextureLoader();

  let material = new THREE.MeshLambertMaterial({map: loader.load('images/forest-texture.jpg'), side: THREE.DoubleSide});

  // width, height, and segments
  let geometry = new THREE.PlaneGeometry(800, 800, 199, 199);
  mesh = new THREE.Mesh(geometry, material);

  // console.log(mesh.geometry.vertices.length);

  // generate height based on brightness of the current height map pixel
  for (let i = 0; i < data.length / 4; i++) {
    mesh.geometry.vertices[i].z = data[i * 4];
  }

  mesh.rotation.x = -Math.PI / 2; // rotate flat

  // necessary for adding light to the custom vertices
  geometry.computeVertexNormals();

  scene.add(mesh);

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  let date = new Date(); // get date string
  let timer = date.getTime() * 0.0002; // get time string, reduce number
  camera.position.x = 800 * Math.cos(timer); // multiplier changes x coordinate
  camera.position.z = 800 * Math.sin(timer); // multiplier changes z coordinate

  controls.update();
}


