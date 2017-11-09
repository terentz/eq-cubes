// dat.GUI init's...
var controls = new function() {
  // console.log('in '+ arguments.callee.name +'()');

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
  this.nowPlaying = (function(){
    var filename = EQ.PARAMS.AUDIO.file,
      trackname = filename.slice(filename.lastIndexOf('/')+1);
    return trackname;
  })();
  this.changeMusic = function() {
    $('#axFileInput').trigger('click');
    $('#axFileInput').change( function() {
      if ( this.files &&
            this.files.length > 0 &&
            /audio\/\w+/.test(this.files[0].type) ) {
        var file = this.files[0],
        filename = file.name,
        trackname = filename.slice(0, filename.lastIndexOf('.'));
        EQ.UTILS.ACTION.playFile(file) ?
          ( controls.nowPlaying = trackname ) :
          ( controls.nowPlaying = 'error!' ) ;
      } else {
        alert('No file selected!');
      }
    });
  };

  // Scene settings...
  this.cellSize = src.GRID.spacing;
  this.bgColRed = EQ.UTILS.CONVERT.colourH2D(EQ.PARAMS.BACKGROUND.colour).r;
  this.bgColGreen = EQ.UTILS.CONVERT.colourH2D(EQ.PARAMS.BACKGROUND.colour).g;
  this.bgColBlue = EQ.UTILS.CONVERT.colourH2D(EQ.PARAMS.BACKGROUND.colour).b;
  // console.log('leaving '+ arguments.callee.name +'()');

};


function buildSystemGUI(gui){
  console.log('in '+ arguments.callee.name +'()');

  // Camera controls..
  var camCtrl = gui.addFolder('Camera');
  camCtrl.add(controls, 'camXPos', -60, 60).name('x position');
  camCtrl.add(controls, 'camYPos', -60, 60).name('y position');
  camCtrl.add(controls, 'camZPos', -60, 60).name('z position');

  // Cube controls..
  var cubeCtrl = gui.addFolder('Cubes');
  cubeCtrl.add(controls, 'rotationSpeed', 0, 0.5).name('Rotation speed');
  cubeCtrl.add(controls, 'orbitSpeed', 0, 0.5).name('Orbit speed');
  cubeCtrl.add(controls, 'orbitRadius', 0, 3.0).name('Orbit radius');
  cubeCtrl.add(controls, 'cubeSize', 0, 3.0).name('Cube size');

  // Audio controls..
  var axCtrl = gui.addFolder('Audio');
  axCtrl.add(controls, 'nowPlaying').name('Now playing').listen();
  axCtrl.add(controls, 'changeMusic').name('Change music');

  // Scene controls..
  var bgCtrl = gui.addFolder('Background');
  var bgColCtrl = bgCtrl.addFolder('Colour');
  bgColCtrl.add(controls, 'bgColRed', 0, 255).step(1).name('red');
  bgColCtrl.add(controls, 'bgColGreen', 0, 255).step(1).name('green');
  bgColCtrl.add(controls, 'bgColBlue', 0, 255).step(1).name('blue');
  console.log('leaving '+ arguments.callee.name +'()');
}
