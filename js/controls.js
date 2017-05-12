// dat.GUI init's...
var params = new function() {
  let src = EQ.PARAMS;
  this.rotationSpeed = src.CUBE.rotation;
  // TODO implement the following..
  this.orbitSpeed = src.CUBE.orbit.speed;
  this.orbitRadius = src.CUBE.orbit.radius;
  this.cubeSize = src.CUBE.size;
  this.cubeColR = null;
  this.cubeColG = null;
  this.cubeColB = null;
  this.cellSize = src.GRID.spacing;
  this.oscDampingFactor = src.CUBE.osc.dampFact;
  this.oscAmplitude = src.CUBE.osc.amp;
  this.camFieldOfView = src.CAM.args.fov;
  this.camAspectWdFact = src.CAM.args.awf;
  this.camNear = src.CAM.args.near;
  this.camFar = src.CAM.args.far;
  this.camXPos = src.CAM.args.initPos.x;
  this.camYPos = src.CAM.args.initPos.y;
  this.camZPos = src.CAM.args.initPos.z;
  this.camXView = src.CAM.args.initView.x;
  this.camYView = src.CAM.args.initView.y;
  this.camZView = src.CAM.args.initView.z;
  this.camXDist = Math.abs(this.camXPos - this.camXView);
  this.camYDist = Math.abs(this.camYPos - this.camYView);
  this.camZDist = Math.abs(this.camZPos - this.camZView);
  // this.camDistance = (function(){
  //   let xD = Math.abs(src.CAM.args.initPos.x - src.CAM.initView.x),
  //       yD = Math.abs(src.CAM.args.initPos.y - src.CAM.initView.y),
  //       zD = Math.abs(src.CAM.args.initPos.z - src.CAM.initView.z);
  //   return Math.sqrt(Math.pow(xD,2)+Math.pow(yD,2)+Math.pow(zD,2));
  // });
};

function buildGUI(gui){
  var cubeF = gui.addFolder('Cube');
  cubeF.add(params, 'rotationSpeed', 0, 0.5);
  cubeF.add(params, 'orbitSpeed', 0, 0.5);
  cubeF.add(params, 'orbitRadius', 0, 3.0);
  cubeF.add(params, 'cubeSize', 0, 3.0);

  var camF = gui.addFolder('Cam');
  camF.add(params, 'camXPos', -60, 60);
  camF.add(params, 'camYPos', -60, 60);
  camF.add(params, 'camZPos', -60, 60);


}
