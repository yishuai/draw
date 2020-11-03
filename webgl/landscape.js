let camera, scene, renderer, controls;

init();
animate();

function init() {
  scene = new THREE.Scene();

  let width = window.innerWidth;
  let height = window.innerHeight;

  // cubemap
  scene.background = new THREE.CubeTextureLoader()
    .setPath( './images/glacier/' )
    .load( [
      'pos-x.jpg',
      'neg-x.jpg',
      'pos-y.jpg',
      'neg-y.jpg',
      'pos-z.jpg',
      'neg-z.jpg'
    ] );

  camera = new THREE.PerspectiveCamera(45, width/height, 10, 25000);
  camera.position.z = 700; // back out a bit
  camera.position.y = 200; // move up a bit
  scene.add(camera);

  let light = new THREE.DirectionalLight(0xfffffff, 1); // color, intensity
  light.position.set(1, 1, 1); // location x, y, z
  scene.add(light);

  material = new THREE.MeshBasicMaterial({envMap: scene.background, side: THREE.DoubleSide});

  // sphere radius, width and height segments
  let sphereGeometry = new THREE.SphereGeometry(100, 50, 50);
  let sphere = new THREE.Mesh(sphereGeometry, material);
  sphere.position.y = 100;
  scene.add(sphere);

  // octahedron radius, detail
  let octahedronGeometry = new THREE.OctahedronGeometry(100, 0);
  let octahedron = new THREE.Mesh(octahedronGeometry, material);
  octahedron.position.y = 100;
  octahedron.position.x = 250;
  scene.add(octahedron);

  // torus radius, tube diam, radial segments, tube segments
  let torusGeometry = new THREE.TorusGeometry(75, 25, 25, 100);
  let torus = new THREE.Mesh(torusGeometry, material);
  torus.position.y = 100;
  torus.position.x = -250;
  scene.add(torus);

  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}