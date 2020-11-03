let camera, scene, renderer;
let geometry, material, mesh;

const container = document.getElementById('container');

init();
animate(); // call animate function after scene is initialized

function init() {
  scene = new THREE.Scene();
  let width = 640;
  let height = 480;

  camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 25000); // FOV, aspect ration, near, far
  camera.position.set(0, 0, 700); // back out on the z-axis
  scene.add(camera); // add camera to scene

  geometry = new THREE.OctahedronGeometry(200, 0); // radius, additional vertices
  material = new  THREE.MeshBasicMaterial({color: 0xffff00, wireframe: true});
  mesh = new THREE.Mesh(geometry, material); // combine geometry and material
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);

  renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;

  renderer.render(scene, camera);
}