// Define cube geometry..
var csz = params.cube.size;
var geometry = new THREE.BoxGeometry(csz,csz,csz);
// var geometry = new THREE.BoxGeometry(1,1,1);
// Create a mesh..
var material = new THREE.MeshNormalMaterial();
// Create the cube..
var cube = new THREE.Mesh(geometry,material);

// Add it to the scene..
scene.add(cube);
// Position the camera..
camera.position.z = params.camera.pos.z;
