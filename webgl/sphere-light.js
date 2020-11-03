let camera, scene, renderer, controls;
let geometry, material, mesh;

init();
animate();

function init() {
  scene = new THREE.Scene();
  let width = window.innerWidth;
  let height = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 25000); // FOV, aspect ration, near, far
  camera.position.set(0, 200, 2000); // x, y (move up), back out on the z-axis
  scene.add(camera); // add camera to scene

  let light = new THREE.DirectionalLight(0xffffff, 3); // color, intensity
  light.position.set(1, 1, 1); // location on x, y, and z
  scene.add(light);

  // var ambientLight = new THREE.AmbientLight(0xffff00); // light color
  // scene.add(ambientLight);

  let pointLight = new THREE.PointLight(0xff00ff, 1, 1000); // color, intensity, distance
  pointLight.position.set(-400, 400, 400);
  scene.add(pointLight);

  geometry = new THREE.SphereGeometry(100, 50, 50); // radius, additional vertices x and y
  material = new  THREE.MeshStandardMaterial({color: 0x808080});
  mesh = new THREE.Mesh(geometry, material); // combine geometry and material
  mesh.position.y = 120;
  scene.add(mesh);

  let floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10); // x, y, vertices
  let floorMaterial = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
  let floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.rotation.x = Math.PI / 2; // rotate to lay flat
  scene.add(floor);

  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);
  controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);
  renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame(animate);

  let date = new Date(); // get date string
  let timer = date.getTime() * 0.0002; // get time string, multiplier changes speed
  // camera.position.x = 800 * Math.cos(timer); // multiplier changes x coordinate
  // camera.position.z = 800 * Math.sin(timer); // multiplier changes y coordinate

  renderer.render(scene, camera);
  controls.update();
}