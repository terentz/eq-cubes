// TODO replace all Object.freeze() calls with recursive freezes from Immutable.js

// alert("WTF?!");
// console.log('namespace.js started');
// var scene = new THREE.Scene();
// var EQ = {};

var EQ = {
  // test_1 : (function(){ console.log('in EQ'); })(),
  XCPTN : {
    InvalidArgumentException : function(_msg,_data){
      this.msg = _msg;
      this.data = _data;
      this.name = "InvalidArgumentException";
      console.log(this.name+":"+this.msg+"|"+this.data);
    }
  },
  // test_2 : (function(){ console.log('XCPTN done'); })(),
  CONST : {
    A4 : 440,
    C0 : (function(){ return this.A4*Math.pow(2, -4.75); })(),
    notes : ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],
    octaves : [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    freqs : [
      8.176, 8.662, 9.177, 9.723, 10.301, 10.914, 11.563, 12.250, 12.979, 13.750, 14.568, 15.434,
      16.352, 17.324, 18.354, 19.445, 20.602, 21.827, 23.125, 24.500, 25.957, 57.500, 29.135, 30.868,
      32.703, 34.684, 36.708, 38.891, 41.203, 43.654, 46.249, 48.999, 51.913, 55.000, 58.270, 61.735,
      65.406, 69.296, 73.416, 77.782, 82.407, 87.307, 92.499, 97.999, 103.83, 110.00, 116.54, 123.47,
      130.81, 138.59, 146.83, 155.56, 164.81, 174.61, 185.00, 196.00, 207.65, 220.00, 233.08, 246.94,
      261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392.00, 415.30, 440.00, 466.16, 493.88,
      523.25, 554.37, 587.33, 622.25, 659.26, 698.46, 739.99, 783.99, 830.61, 880.00, 932.33, 987.77,
      1046.5, 1108.7, 1174.7, 1244.5, 1318.5, 1396.9, 1480.0, 1568.0, 1661.2, 1760.0, 1864.7, 1975.5,
      2093.0, 2217.5, 2349.3, 2489.0, 2637.0, 2793.8, 2960.0, 3136.0, 3322.4, 3520.0, 3729.3, 3951.1,
      4186.0, 4434.9, 4698.6, 4978.0, 5274.0, 5587.7, 5919.9, 6271.9, 6644.9, 7040.0, 7458.6, 7902.1,
      8372.0, 8869.8, 9397.3, 9956.1, 10548.1, 11175.3, 11839.8, 12543.9
    ],
    lockConstants : function(){
      Object.freeze(this);  // TODO may need to go deeper here
      Object.freeze(this.A4);
      Object.freeze(this.C0);
      Object.freeze(this.notes);
      Object.freeze(this.octaves);
      Object.freeze(this.freqs);
      // delete this.lockConstants;
    }
  },
  // test_3 : (function(){ console.log('CONST done'); })(),
  ENUM : {
    AXIS : {
      X : 0,
      Z : 1
    },
    DIR : {  // Enum for the direction in which ascending notes and octaves run.
      F2B : 0,
      L2R : 1,
      B2F : 2,
      R2L : 3
    },
    GRID_PATTERN : {
      DIAG_GRAD : 0,
      ZIGZAG : 1,
      SPIRAL_IN : 2,
      SPIRAL_OUT : 3
    },
    MESH_MAT : {
      NORMAL : 0
    },
    MOVE : {
      JUMP : 0,
      SHM : 1,
      DHM : 2,
      ORBIT : 3,
      SPIN : 4
    },
    lockEnums : function(){
      Object.freeze(this.AXIS);
      Object.freeze(this.DIR);
      Object.freeze(this.GRID_PATTERN);
      Object.freeze(this.MESH_MAT);
      Object.freeze(this.MOVE);
    }
  },
  // test_4 : (function(){ console.log('ENUM done'); })(),
  DEFS : {  // Defaults
    CAM : {
      arguments : {      // TODO group CAMERA.args even further if necessary.
        fov : 60.0,   // Field of view
        awf : 0.9,    // Aspect Width Factor
        near : 0.1,
        far : 2000.0,
        initialPosition : {
          x : 0.0,
          y : 0.0,
          z : 5.0
        },
        initialView : {
          x : 0.0,
          y : 0.0,
          z : 0.0
        }
      },
      framesPerSecond : 60.0
    },
    CUBE : {    // Some of the following could just as well be individualised
      size : 1.0,
      rotation : 0.04,
      orbit : {
        radius : 1.5,
        speed : 6.0
      },
      mesh : {
        //material : (function(){ return EQ.ENUM.MESH_MAT.NORMAL; }()), // TODO debug this bizarre error!
        colour : null      // TODO complete this!
      },
      oscillation : {
        dampeningFactor : 0.15,       // Gamma, the damping coefficient
        amplitude : 1.0,        // Amplitude, initially
        frequency : 8.0,       // Omega, the angular frequency
        phase : 0.0
      },
      motion : {
        jumping : false,
        orbiting : false,
        rotating : true,
        DHMing : false,
        SHMing : false
      }
    },
    GRID : {
      spacing : 2.5//,
      // ascent : {
      //   notes : null,
      //   octaves : null
      // },
      // // pattern : ENUM.GRID_PATTERN.HILL
      // firstSquareLocation : {
      //   x : null,
      //   y : null,
      //   z : null
      // }
    },
    lockDefaults : function(){
      Object.freeze(this.CAM);
      Object.freeze(this.CAM.arguments);
      Object.freeze(this.CAM.arguments.initialPosition);
      Object.freeze(this.CAM.arguments.initialView);
      Object.freeze(this.CUBE);
      Object.freeze(this.CUBE.orbit);
      // Object.freeze(this.GRID);
    }
  },
  // test_5 : (function(){ console.log('DEFS done'); })(),
  UTILS : {
    /* Conversions from frequency to midi or Note object, and from midi to octave, key, or frequency */
    freq2midi : function(freq){
      return Math.round(12*Math.log2(freq/EQ.CONST.C0))+12;
    },
    midi2octave : function(midi){
      return Math.floor(midi/12)-1;
    },
    midi2key : function(midi){
      return midi % 12;
    },
    midi2freq : function(midi){
      return EQ.CONST.freqs[midi];
    },
    freq2note : function(freq){
      var midi = this.freq2midi(freq);
      return { 'midi': midi,
              'octave': this.midi2octave(midi),
              'key': this.midi2key(midi),
              'freq': this.midi2freq(midi)
      };
    },
    midi2note : function(midi){
      return { 'midi': midi,
              'octave': this.midi2octave(midi),
              'key': this.midi2key(midi),
              'freq': this.midi2freq(midi)
      };
    },
    lockUtils : function(){
      Object.freeze(this.freq2midi);
      Object.freeze(this.midi2octave);
      Object.freeze(this.midi2key);
      Object.freeze(this.midi2freq);
      Object.freeze(this.freq2note);
    }
  },
  // test_6 : (function(){ console.log('UTILS done'); })(),
  DOM : {
    test_7 : (function(){ console.log('in DOM'); })(),
    Cell : function(args){

      // TODO: remove test line...
      // console.log('building cell');

      var _pos = args.pos;
      var _cube = args.cube;
      var _pitch = args.pitch;
      // var _mesh = (function(){
      //   if ( args.mesh.geo !== "undefined" && args.mesh.geo instanceof THREE.Mesh ) {
      //     return args.mesh;
      //   } return null;
      // })();

      var _playing = false;
      var _volume = 0.0;
      var _motion = {
        orbiting : EQ.DEFS.CUBE.motion.orbiting,
        rotating : EQ.DEFS.CUBE.motion.rotating,
        jumping : EQ.DEFS.CUBE.motion.jumping,
        DHMing : EQ.DEFS.CUBE.motion.DHMing,
        SHMing : EQ.DEFS.CUBE.motion.SHMing
      };

      var _lastX = null;
      var _lastY = null;
      var _lastZ = null;
      var _currX = (function(){ return null; })();
      var _currY = (function(){ return null; })();
      var _currZ = (function(){ return null; })();



      return {
        // mesh : function(){ return _mesh; },
        // meshMat : function(){
        //   switch(_mesh.material){
        //     case EQ.ENUM.MESH_MAT.NORMAL:
        //       return "MeshNormalMaterial";
        //     // TODO populate with more of these...
        //     default: return null;
        //   }
        // },
        // meshCol : function(){ return _mesh.colour; },
        pos : function(){ return _pos; },
        posX : function(){ return _pos.x; },
        posY : function(){ return _pos.y; },
        posZ : function(){ return _pos.z; },
        // orbit : function(){ return _orbit; },
        // orbitRad : function(){ return _orbit.radius; },
        // incOrbRad : function(inc){ if ( inc > 0 ) _orbit.radius += inc; },
        // decOrbRad : function(dec){
        //   if ( dec > 0 ) {
        //     if ( _orbit.speed > 0.0 ) _orbit.radius -= dec;
        //     if ( _orbit.speed < 0.0 ) _orbit.radius = 0.0;
        //   }
        // },
        // orbitSpd : function(){ return _orbit.speed; },
        // incOrbSpd : function(inc){ if ( inc > 0 ) _orbit.speed += inc; },
        // decOrbSpd : function(dec){
        //   if ( dec > 0 ) {
        //     if ( _orbit.speed > 0.0 ) _orbit.speed -= dec;
        //     if ( _orbit.speed < 0.0 ) _orbit.speed = 0.0;
        //   }
        // },
        // rot : function(){ return _rotation; },
        // incRotate : function(inc){ if ( inc > 0 ) _rotation += inc; },
        // decRotate : function(dec){
        //   if ( dec > 0 ) {
        //     if ( _rotation > 0.0 ) _rotation -= dec;
        //     if ( _rotation < 0.0 ) _rotation = 0.0;
        //   }
        // },
        // sz : function(){ return _size; },
        // incSize : function(inc){
        //   if ( inc > 0 ) _sz += inc;
        //   else throw new InvalidArgumentException("Arg must be greater than zero!");
        // },
        // decSize : function(dec){
        //   if ( dec > 0 ) {
        //     if ( _size > 0.0 ) _size -= dec;
        //     if ( _size < 0.0 ) _size = 0.0;
        //   } else {
        //     throw new InvalidArgumentException("Arg must be greater than zero!");
        //   }
        // },
        // TODO test these and if they work, remove the redundant setters above..
        // increase : function(prop, amt){
        //   if ( typeof amt === "number" ) {
        //     // if ( this[eval(prop.toString())] !== "undefined" ) {
        //     //   if ( this[eval(prop.toString())) {
        //     if ( eval("_"+prop.toString()+'!== "undefined"') ) {
        //       if ( eval("_"+prop.toString()+">0.0") ) {
        //         if ( amt > 0 ) {
        //           eval("_"+prop.toString()+"+=amt");
        //           return true;
        //         } else throw new InvalidArgumentException("'amt' must be greater than zero!",{'amt':amt});
        //       } else throw new InvalidArgumentException("The value of property held in 'prop' must be greater than zero!",{"_"+prop.toString():(eval("_"+prop.toString()))});
        //     } else throw new InvalidArgumentException("'prop' must be a property of this object!",{'prop':prop});
        //   } else throw new InvalidArgumentException("'amt' must be a number!",{'amt':amt});
        //   return false;
        // },
        // decrease : function(prop, amt){
        //   if ( typeof amt === "number" ) {
        //     if ( eval("_"+prop.toString()+'!== "undefined"') ) {
        //       if ( eval("_"+prop.toString()+">0.0") ) {
        //         if ( amt > 0 ) {
        //           eval("_"+prop.toString()+"+=amt");
        //           if ( eval("_"+prop.toString()+"<0.0") ) eval("_"+prop.toString()+"=0.0");
        //           return true;
        //         } else throw new InvalidArgumentException("'amt' must be greater than zero!",{'amt':amt});
        //       } else throw new InvalidArgumentException("The value of property held in 'prop' must be greater than zero!",{"_"+prop.toString():(eval("_"+prop.toString()))});
        //     } else throw new InvalidArgumentException("'prop' must be a property of this object!",{'prop':prop});
        //   } else throw new InvalidArgumentException("'amt' must be a number!",{'amt':amt});
        //   return false;
        // },
        //
        // Oscillation methods
        // initSHM : function(){}, // TODO complete this
        // initDHM : function(){}, // TODO complete this
        // update : function(){},   // TODO complete this
        // updateSHM : function(){},
        // updateDHM : function(){},
        // stopSHM : function(){},
        // frequency : function(){ return _pitch.frequency; },

        // updateX : function(next){},
        // updateY : function(next){},
        // updateZ : function(next){ return null; },

        toString : function() {
          return "pos{"+(_pos.x)+","+(_pos.y).toString()+","+(_pos.z).toString()+"}";
        }
      };
    },
    // test_8 : (function(){ console.log('Cell defined'); })(),
    Grid : function(args){

      // TODO: remove test line...
      // console.log('building grid');

      var spacing = EQ.DEFS.GRID.spacing;
      var span = { x : EQ.CONST.octaves.length, z : EQ.CONST.notes.length };
      var xHi, xLo, zHi, zLo;
      var cells = [];
      var arrangement = EQ.ENUM.GRID_PATTERN.DIAG_GRAD;
      var midi = 0;
      (function(){
        xHi = (function(){ return (span.x-1)/2.0*spacing; }());
        xLo = (-1)*xHi;
        zHi = (function(){ return (span.z-1)/2.0*spacing; }());
        zLo = (-1)*zHi;

        // TODO: remove test line...
        console.log('[xLo:'+xLo+',zLo:'+zLo+']');
        console.log('[xHi:'+xHi+',zHi:'+zHi+']');


        // Iterate through the grid...
        for ( let zi=zLo ; zi<=zHi ; zi+=spacing ) {
          for ( let xi=xLo ; xi<=xHi ; xi+=spacing ) {
            // Create a cube and add it...
            // let cArgs = {},
            //     _pos = { x:xi, y:0, z:zi };
            var cube = new THREE.Mesh(args.geo,args.mat);
            args.scene.add(cube);

            // Version 1
            var pos = { x:xi, y:0, z:zi };
            // 1A...
            cube.position = pos; // Try creating a small deep copy function perhaps (if the following versions all fail!)
            // 1B...
            cube.position.x = pos.x;
            cube.position.y = pos.y;
            cube.position.z = pos.z;


            // var pos = {};
            // Version 2
            // cube.position.x, pos.x = xi;
            // cube.position.y, pos.y = 0;
            // cube.position.z, pos.z = zi;

            // Version 3
            // cube.position.x = (pos.x = xi);
            // cube.position.y = (pos.y = 0);
            // cube.position.z = (pos.z = zi);

            // cArgs.pos = _pos;
            // cArgs.cube = _cube;
            // cArgs.pitch = midi2note(midi);
            // _cells[midi] = new EQ.DOM.Cell(cArgs);
            // OR
            // _cells[_midi] = new EQ.DOM.Cell({


            cells.push(new EQ.DOM.Cell({
            // EQ.DOM.Cell(
              'pos' : pos,
              'cube' : cube,
              'pitch' : (function(){ return EQ.UTILS.midi2note(midi); })()
            }));
            // TODO remove this test line..
            console.log('cells[midi]='+cells[midi].toString());
            console.log('cube.position='+cube.position.toString());

            midi++;
          }
        }
      })();
      return cells;
    }//,
    // test_9 : (function(){ console.log('Grid defined'); })()
  }
};
//
// var Grid = EQ.DOM.Grid;
// var frameRate = 60.0;
// var time = 0.0;
// let args = EQ.DEFS.CAM.arguments;
// // let awf = args.aspectWidthFactor;
// var mag = EQ.DEFS.CUBE.size;
// console.log('args:'+args);
// // console.log('awf:'+args);
//
// var scene = new THREE.Scene();
//
// var aspect = window.innerWidth * args.awf / window.innerHeight;
// var camera = new THREE.PerspectiveCamera(
//   args.fov,
//   aspect,
//   args.near,
//   args.far
// );
// var renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth*(args.awf-0.01), window.innerHeight);
// document.body.appendChild(renderer.domElement);
//
// // TODO: should these declarations be confined to the domain definition??
// var geometry = new THREE.BoxGeometry(mag,mag,mag);
// var material = new THREE.MeshNormalMaterial();
//
// var grid = new Grid({ 'scene':scene, 'geo':geometry, 'mat':material });
//
//
//
// camera.position.z = 40;
// camera.position.y = 5;
//



// var render = function(){
//     requestAnimationFrame(render);
//     time += ( 1.0 / frameRate );
//
//     renderer.render(scene,camera);
// };
// render();
