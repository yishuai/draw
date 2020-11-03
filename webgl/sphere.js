let camera, scene, renderer, controls;
let geometry, material, mesh;

init();
animate(); // call animate function after scene is initialized

function init() {
  scene = new THREE.Scene();
  let width = window.innerWidth;
  let height = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 25000); // FOV, aspect ration, near, far
  camera.position.set(0, 200, 700); // x, y (move up), back out on the z-axis
  scene.add(camera); // add camera to scene

  geometry = new THREE.SphereGeometry(100, 10, 10); // radius, additional vertices x and y
  material = new  THREE.MeshBasicMaterial({color: 0xffff00, wireframe: true});
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

  mesh.rotation.y += 0.01;
  mesh.rotation.x += 0.01;

  renderer.render(scene, camera);
  controls.update();
}