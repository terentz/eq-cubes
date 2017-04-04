// Define cube geometry..
// var geometry = new THREE.BoxGeometry(params.cube.size,params.cube.size,params.cube.size);
var geometry = new THREE.BoxGeometry(1,1,1);
// Create a mesh..
var material = new THREE.MeshNormalMaterial();
// Create the cube..
var cube = new THREE.Mesh(geometry,material);

// Add it to the scene..
scene.add(cube);
// Position the camera..
camera.position.z = 5;
