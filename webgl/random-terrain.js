let camera, scene, renderer, controls, mesh;

init();

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

  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);

  terrain();
}

function terrain() {
  let material = new THREE.MeshLambertMaterial({wireframe: true, color: 0xffffff, side: THREE.DoubleSide});

  // width, height, and segments
  let geometry = new THREE.PlaneGeometry(800, 800, 20, 20);
  mesh = new THREE.Mesh(geometry, material);

  console.log(mesh.geometry.vertices.length);

  // generate random heights for each vertex
  for (let i = 0; i < mesh.geometry.vertices.length; i++) {
    mesh.geometry.vertices[i].z = Math.floor(Math.random() * 100);
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

  // for (let i = 0; i < mesh.geometry.vertices.length; i++) {
  //   mesh.geometry.vertices[i].z = Math.floor(Math.random() * 100);
  // }

  // mesh.geometry.verticesNeedUpdate = true;

  controls.update();
}


