var TEST = {};


function init() {
  console.log('in init()');
  var kbAudioContext = new ( window.AudioContext || window.webkitAudioContext ),
      scene, camera, lights=[], controls, grid, renderer,
      fps, step, ts, tsLast,
      time=0.0, stats = initStats();

  initControls(new dat.GUI());
  initPiano();
  initScene();

  // And action!
  step = 0;
  ts = Date.now();

  function render() {
    console.log('in '+ arguments.callee.name +'()');

    // console.log('clearColor: ' + renderer.getClearColor().toString());

    updateScene();

    stats.update();

    requestAnimationFrame(render);

    updateFlags();

    renderer.render(scene, camera);
  }


  /* UPDATES.. */

  function updateScene() {
    console.log('in '+ arguments.callee.name +'()');
    // Cubes..
    grid.updateCells({
                        rotation : {
                          x : controls.rotationSpeed,
                          y : 0,
                          z : controls.rotationSpeed
                        },
                        geometry : {
                          wd : controls.cubeSize,
                          ht : controls.cubeSize,
                          dp : controls.cubeSize
                        },
                        orbit : { // TODO implement the following..
                          radius : controls.orbitRadius,
                          speed : controls.orbitSpeed
                        }
                      });

    // Camera..
    camera.position.x = controls.camXPos;
    camera.position.y = controls.camYPos;
    camera.position.z = controls.camZPos;
    camera.lookAt(scene.position);

    // Background colour..
    let newColour = EQ.UTILS.CONVERT.colourD2H({
                                          r : controls.bgColRed,
                                          g : controls.bgColGreen,
                                          b : controls.bgColBlue
                                        });
    let newRed = controls.bgColRed,
        newGreen = controls.bgColGreen,
        newBlue = controls.bgColBlue;
    let oldCol = renderer.getClearColor();
    oldCol.r !== controls.bgColRed &&
      oldCol.g !== controls.bgColGreen &&
      oldCol.b !== controls.bgColBlue &&
      renderer.setClearColor(newColour, 1);
    console.log('leaving '+ arguments.callee.name +'()');
  }

  function updateFlags() {
    tsLast = ts;
    ts = Date.now();
    let diff = ts - tsLast;
    fps = parseInt(1000.0 / diff);
    time += diff;
  }


  /* INIT'S... */

  function initStats() {
    TEST.o = arguments.callee;
    console.log('in '+ arguments.callee.name +'()');
    stats = new Stats();
    stats.setMode(0);
    $("#stats-output").append(stats.domElement);
    console.log('leaving '+ arguments.callee.name +'()');
    return stats;
  }

  function initPiano() {
    console.log('in '+ arguments.callee.name +'()');
    var oscList = [],
        kbBlkKeyDownColour = "#B30B0B",
        kbBlkKeyHoverColour = "#B30B0B",
        kbWhtKeyDownColour = "",
        kbMasterGainNode = kbAudioContext.createGain(),
        kbWavePicker,
        kbVolumeControl;

    function drawKeyboard() {
      console.log('in '+ arguments.callee.name +'()');
      var inc,
          midi = 0,
          piaWd = EQ.PARAMS.PIANO.wd,
          piaHt = EQ.PARAMS.PIANO.ht,
          keyWd = piaWd / 77.0,
          blkHt = piaHt * 0.6,
          blkWd = keyWd * 0.8,
          ctrlHt = 6,
          left = -(keyWd);

      // Set the piano's width, then add the keys..
      $('#keyboard').css({ width : vw(piaWd), height : vw(piaHt) });
      $('#keyboard-container').css({ height : vw(piaHt+ctrlHt) });
      $('#keyboard-controls').css({ height : vw(ctrlHt) });

      for ( let o in EQ.CONST.octaves ) {

        let octave = '' + EQ.CONST.octaves[o];

        for ( let n in EQ.CONST.notes2 ) {
          // ++noteCounter;

          // The html...
          let note = EQ.CONST.notes2[n].id;
          let keyCol = ( note.length > 1 ) ? 'black' : 'white';
          let keyId = '' + note + octave;
          let freq = EQ.CONST.freqs[midi];
          let key = '<div id=\''+keyId+'\' class=\''+keyCol+'-key\'></div>';

          $('#keyboard').append(key);

          var keyElement = document.getElementById(keyId);
          keyElement.dataset['octave'] = ''+octave;
          keyElement.dataset['note'] = note;
          keyElement.dataset['freq'] = freq;
          keyElement.dataset['midi'] = midi;
          // The jQuery...
          $('#'+keyId).mousedown({ colour: 'grey', 'freq': freq, note: EQ.CONST.notes2[n].name }, keyPressed);
          $('#'+keyId).mouseup({ colour: keyCol }, keyReleased);
          // The css...
          switch(note) {
            // case 'Cs' || 'D' || 'Ds' || 'E' || 'Fs' || 'G' || 'Gs' || 'A' || 'As' || 'B':
            case 'Cs':
            case 'Ds':
            case 'Fs':
            case 'Gs':
            case 'As':
              inc = 0.6;
              break;
            case 'D':
            case 'E':
            case 'G':
            case 'A':
            case 'B':
              inc = 0.4;
              break;
            // case ('C' || 'F'):
            case 'C':
            case 'F':
              inc = 1;
              break;
            default:
              console.error('No switch result!');
          }

          left += (keyWd*inc);
          let vw = ''+left+'vw';
          $('#'+keyId).css({'left':vw,'top':'0'});

          ++midi;
          //left += ( () ?  :  );
        }
      }

      $('.black-key').css({ height : vw(blkHt), width : vw(blkWd) });
      $('.white-key').css({ width : vw(keyWd) });
      console.log('leaving '+ arguments.callee.name +'()');

    }

    function initAudio() {
      console.log('in '+ arguments.callee.name +'()');

      kbWavePicker = $('#kb-waveform-selector')[0];
      kbVolumeControl = $('#kb-volume-ctrl')[0];
      kbMasterGainNode.connect(kbAudioContext.destination);
      kbMasterGainNode.gain.value = kbVolumeControl.value;
      $('#kb-volume-ctrl').change(changeVolume);
      console.log('leaving '+ arguments.callee.name +'()');
    }

    function playNote(event) {
      console.log('in '+ arguments.callee.name +'()');
      let freq = event.target.dataset['freq'],
          osc = kbAudioContext.createOscillator(),
          type = kbWavePicker.options[kbWavePicker.selectedIndex].value;

      osc.connect(kbMasterGainNode);
      osc.type = type;
      osc.frequency.value = freq;
      osc.start();

      console.log('leaving '+ arguments.callee.name +'()');
      return osc;
    }
    function keyPressed(event) {
      console.log('in '+ arguments.callee.name +'()');
      if ( event.buttons & 1 ) {
        let dataset = event.target.dataset;
        console.log('clicked');
        console.dir(dataset);
        if ( !dataset['pressed'] ) {
          oscList[dataset['octave'][dataset['note']]] = playNote(event);
          dataset['pressed'] = 'yes';
        }
      }
      $('#'+event.target.id).css({ 'background-color': event.data.colour });
      console.log('leaving '+ arguments.callee.name +'()');
    }
    function keyReleased(event) {
      console.log('in '+ arguments.callee.name +'()');
      let dataset = event.target.dataset;

      if (dataset && dataset["pressed"]) {
        oscList[dataset["octave"][dataset["note"]]].stop();
        oscList[dataset["octave"][dataset["note"]]] = null;
        delete dataset["pressed"];
      }
      $('#'+event.target.id).css({ 'background-color': event.data.colour });
      console.log('leaving '+ arguments.callee.name +'()');
    }
    function changeVolume() {
      kbMasterGainNode.gain.value = kbVolumeControl.value;
    }
    function vw(num){
      return ''+num+'vw';
    }

    drawKeyboard();
    initAudio();
    console.log('leaving '+ arguments.callee.name +'()');
  }

  function initControls(gui) {
    console.log('in '+ arguments.callee.name +'()');

    function buildGUI(gui){
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
    }

    controls = new function() {
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
    };

    buildGUI(gui);

  }

  function initScene() {
    console.log('in '+ arguments.callee.name +'()');

    scene = new THREE.Scene();
    var camArgs;

    function initAnimationParameters(){
      console.log('in '+ arguments.callee.name +'()');
      camArgs = EQ.PARAMS.CAM.args,
      mag = EQ.PARAMS.CUBE.size;
      console.log('leaving '+ arguments.callee.name +'()');
    }

    function initRenderer() {
      console.log('in '+ arguments.callee.name +'()');
      renderer = new THREE.WebGLRenderer();
      renderer.setClearColor(0xEEEEEE, 1);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMapEnabled = true;
      console.log('leaving '+ arguments.callee.name +'()');
    }

    function initAxes() {
      console.log('in '+ arguments.callee.name +'()');
      var axes = new THREE.AxisHelper(20);
      scene.add(axes);
      console.log('leaving '+ arguments.callee.name +'()');
    }

    function initObjects() {
      console.log('in '+ arguments.callee.name +'()');
      var geometry = new THREE.BoxGeometry(mag,mag,mag),
          material = new THREE.MeshNormalMaterial();
      grid = new EQ.OBD.Grid({ 'scene':scene, 'geo':geometry, 'mat':material });
      console.log('leaving '+ arguments.callee.name +'()');
    }

    function initLights() {
      console.log('in '+ arguments.callee.name +'()');
      lights[0] = new THREE.SpotLight( {color : EQ.PARAMS.LIGHT.color} );
      lights[0].position.set(EQ.PARAMS.LIGHT.pos.x, EQ.PARAMS.LIGHT.pos.y, EQ.PARAMS.LIGHT.pos.z);
      lights[0].castShadow = true;
      scene.add(lights[0]);
      console.log('leaving '+ arguments.callee.name +'()');
    }

    function initCamera() {
      console.log('in '+ arguments.callee.name +'()');
      var aspect = window.innerWidth / window.innerHeight;
      camera = new THREE.PerspectiveCamera(
        camArgs.fov,
        (function(){ return window.innerWidth / window.innerHeight; }()),
        camArgs.near,
        camArgs.far
      );
      camera.position.x = EQ.PARAMS.CAM.args.initPos.x;
      camera.position.y = EQ.PARAMS.CAM.args.initPos.y;
      camera.position.z = EQ.PARAMS.CAM.args.initPos.z;
      camera.lookAt(scene.position);
      console.log('leaving '+ arguments.callee.name +'()');
    }

    initAnimationParameters();
    initRenderer();
    initAxes();
    initObjects();
    initLights();
    initCamera();

    // Add the scene to the page...
    $("#WebGL-output").append(renderer.domElement);
    console.log('leaving '+ arguments.callee.name +'()');

  }

  render();
}
