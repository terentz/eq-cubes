// dat.GUI init's...
var params = new function() {
  let src = EQ.PARAMS;

  // Camera settings...
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

  // Cube settings...
  this.rotationSpeed = src.CUBE.rotation;
  // TODO implement the following..
  this.orbitSpeed = src.CUBE.orbit.speed;
  this.orbitRadius = src.CUBE.orbit.radius;
  this.cubeSize = src.CUBE.size;
  this.cubeColR = null;
  this.cubeColG = null;
  this.cubeColB = null;
  this.oscDampingFactor = src.CUBE.osc.dampFact;
  this.oscAmplitude = src.CUBE.osc.amp;

  // Audio settings...
  this.nowPlaying = EQ.PARAMS.AUDIO.file;


  // Scene settings...
  this.cellSize = src.GRID.spacing;
  this.bgColourRed = EQ.UTILS.colourH2D(EQ.PARAMS.SCENE.bgColour).r;
  this.bgColourGreen = EQ.UTILS.colourH2D(EQ.PARAMS.SCENE.bgColour).g;
  this.bgColourBlue = EQ.UTILS.colourH2D(EQ.PARAMS.SCENE.bgColour).b;
};

function buildGUI(gui){

  // Camera controls..
  var camCtrl = gui.addFolder('Cam');
  camCtrl.add(params, 'camXPos', -60, 60);
  camCtrl.add(params, 'camYPos', -60, 60);
  camCtrl.add(params, 'camZPos', -60, 60);

  // Cube controls..
  var cubeCtrl = gui.addFolder('Cube');
  cubeCtrl.add(params, 'rotationSpeed', 0, 0.5);
  cubeCtrl.add(params, 'orbitSpeed', 0, 0.5);
  cubeCtrl.add(params, 'orbitRadius', 0, 3.0);
  cubeCtrl.add(params, 'cubeSize', 0, 3.0);

  // Audio controls..
  var axCtrl = gui.addFolder('Audio');
  // gui.add(axCtrl,'changeAudio').name('Change audio');
  // axCtrl.add(params, { nowPlaying:
  //   function(){
  //     console.log("clicked");
  //     show('modal');
  //   }
  // }).name('Now playing');
  axCtrl.add(params, 'nowPlaying').name('Now playing');
  var upload = { changeMusic: function(){

      // console.log("clicked");
      show('modal');
      // show('playBtn'); TODO move this to 'modal.js'
    }
  };
// }).name('Now playing');
  axCtrl.add( upload,  'changeMusic').name('New music');
    // }
  // );

  // Scene controls..
  var sceneCtrl = gui.addFolder('Scene');
  sceneCtrl.add(params, 'bgColourRed', 0, 255).step(1);
  sceneCtrl.add(params, 'bgColourGreen', 0, 255).step(1);
  sceneCtrl.add(params, 'bgColourBlue', 0, 255).step(1);

}
