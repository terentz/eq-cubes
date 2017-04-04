
// Create the main scene graph elements..
var scene = new THREE.Scene();
var aspect = window.innerWidth * params.camera.args.aspectWidthFactor / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75,aspect,0.1,1000);
// var camera = new THREE.PerspectiveCamera(params.camera.args.fov, aspect, params.camera.args.near, params.camera.args.far);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth*(params.camera.args.aspectWidthFactor-0.01), window.innerHeight);
document.body.appendChild(renderer.domElement);
