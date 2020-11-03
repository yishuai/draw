let camera, scene, renderer, controls, model;

function init() {
  scene = new THREE.Scene();
  let width = window.innerWidth;
  let height = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, width/height, 1, 20000);
  camera.position.set(0, 0, 80); // back out a bit to see the model
  scene.add(camera);

  let light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1);
  scene.add(light);

  let loader = new THREE.GLTFLoader();

  // load the glTF resource
  loader.load(
    // path to the model
    'buddha/scene.gltf',
    // function to call when the resource is loaded
    function(gltf) {
      model = gltf.scene;
      scene.add(model);

      gltf.animations;
      gltf.scene;
      gltf.scenes;
      gltf.cameras;
      gltf.assets;

      model.rotation.z = .04;
      model.position.z = -10;
    }
  );

  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  if (model) {
    model.rotation.y += 0.01;
  }

  controls.update();
}

init();
animate();