
/* SETUP */
// aliases..

var Grid = EQ.DOM.Grid;
var frameRate = 60.0;
var time = 0.0;
let args = EQ.DEFS.CAM.arguments;
// let awf = args.aspectWidthFactor;
var mag = EQ.DEFS.CUBE.size;
console.log('args:'+args);
// console.log('awf:'+args);

var scene = new THREE.Scene();

var aspect = window.innerWidth * args.awf / window.innerHeight;
var camera = new THREE.PerspectiveCamera(
  args.fov,
  aspect,
  args.near,
  args.far
);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth*(args.awf-0.01), window.innerHeight);
document.body.appendChild(renderer.domElement);

// TODO: should these declarations be confined to the domain definition??
var geometry = new THREE.BoxGeometry(mag,mag,mag);
var material = new THREE.MeshNormalMaterial();

var grid = new Grid({ 'scene':scene, 'geo':geometry, 'mat':material });



camera.position.z = 40;
camera.position.y = 5;
