// TODO replace all Object.freeze() calls with recursive freezes from Immutable.js



var scene = new THREE.Scene();
// var EQ = {};

var EQ = {
  XCPTN : {
    InvalidArgumentException : function(_msg,_data){
      this.msg = _msg;
      this.data = _data;
      this.name = "InvalidArgumentException";
      console.log(this.name+":"+this.msg+"|"+this.data);
    }
  },
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
  DEFS : {  // Defaults
    CAM : {
      arguments : {      // TODO group CAMERA.args even further if necessary.
        fieldOfView : 60.0,   // Field of view
        aspectWidthFactor : 0.9,    // Aspect Width Factor
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
      var _midi = this.freq2midi(freq);
      return { 'midi': _midi,
              'octave': this.midi2octave(_midi),
              'key': this.midi2key(_midi),
              'freq': this.midi2freq(_midi)
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
  DOM : {
    Cell : function(args){
      var _pos = args.pos;
      var _cube = args.cube;
      var _pitch = args.pitch;
      var _mesh = (function(){
        if ( args.mesh.geo !== "undefined" && args.mesh.geo instanceof THREE.Mesh ) {
          return args.mesh;
        } return null;
      })();

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
        mesh : function(){ return _mesh; },
        meshMat : function(){
          switch(_mesh.material){
            case EQ.ENUM.MESH_MAT.NORMAL:
              return "MeshNormalMaterial";
            // TODO populate with more of these...
            default: return null;
          }
        },
        meshCol : function(){ return _mesh.colour; },
        pos : function(){ return _position; },
        posX : function(){ return _position.x; },
        posY : function(){ return _position.y; },
        posZ : function(){ return _position.z; },
        orbit : function(){ return _orbit; },
        orbitRad : function(){ return _orbit.radius; },
        incOrbRad : function(inc){ if ( inc > 0 ) _orbit.radius += inc; },
        decOrbRad : function(dec){
          if ( dec > 0 ) {
            if ( _orbit.speed > 0.0 ) _orbit.radius -= dec;
            if ( _orbit.speed < 0.0 ) _orbit.radius = 0.0;
          }
        },
        orbitSpd : function(){ return _orbit.speed; },
        incOrbSpd : function(inc){ if ( inc > 0 ) _orbit.speed += inc; },
        decOrbSpd : function(dec){
          if ( dec > 0 ) {
            if ( _orbit.speed > 0.0 ) _orbit.speed -= dec;
            if ( _orbit.speed < 0.0 ) _orbit.speed = 0.0;
          }
        },
        rot : function(){ return _rotation; },
        incRotate : function(inc){ if ( inc > 0 ) _rotation += inc; },
        decRotate : function(dec){
          if ( dec > 0 ) {
            if ( _rotation > 0.0 ) _rotation -= dec;
            if ( _rotation < 0.0 ) _rotation = 0.0;
          }
        },
        sz : function(){ return _size; },
        incSize : function(inc){
          if ( inc > 0 ) _sz += inc;
          else throw new InvalidArgumentException("Arg must be greater than zero!");
        },
        decSize : function(dec){
          if ( dec > 0 ) {
            if ( _size > 0.0 ) _size -= dec;
            if ( _size < 0.0 ) _size = 0.0;
          } else {
            throw new InvalidArgumentException("Arg must be greater than zero!");
          }
        },
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
        initSHM : function(){}, // TODO complete this
        initDHM : function(){}, // TODO complete this
        update : function(){},   // TODO complete this
        updateSHM : function(){},
        updateDHM : function(){},
        stopSHM : function(){},
        frequency : function(){ return _pitch.frequency; },

        updateX : function(next){},
        updateY : function(next){},
        updateZ : function(next){ return null; }
      };
    },
    // Cell.prototype : {
    //   constructor : this.Cell
    // }
    Grid : function(args){
      var spacing = EQ.DEFS.GRID.spacing;
      var span = { x : EQ.CONST.octaves.length, z : EQ.CONST.notes.length };
      var xHi, xLo, zHi, zLo;
      var _cells = [];
      var _arrangement = EQ.ENUM.GRID_PATTERN.DIAG_GRAD;
      var _midi0;
      (function(){
        xHi = (function(){ return (_span.x-1)/2.0*spacing; }());
        xLo = (-1)*xHi;
        zHi = (function(){ return (_span.z-1)/2.0*spacing; }());
        zLo = (-1)*zHi;
        _midi0.x = xLo;
        _midi0.y = 0;
        _midi0.z = zLo;
        var midi = 0;
        for ( var iZ=zLo ; iZ<=zHi ; iZ+=spacing ) {
          for ( var iX=zLo ; iX<=xHi ; iX+=spacing ) {
            let cube = new THREE.Mesh(geometry,material);
            scene.add(cube);
            cube.position.x = iX;
            cube.position.y = 0;
            cube.position.z = iZ;
            let args = {};
            args.pos = { x : iX, y : 0, z : iZ };
            args.cube = cube;
            args.pitch = midi2note(midi);
            let cell = new EQ.DOM.Cell(args);
            _cells[midi] = cell;
          }
        }
      })();
    }
  },
  SETUP : {

  }
};

/* SETUP */
EQ.aspect = window.innerWidth * EQ.DEFS.CAM.args.aspectWidthFactor / window.innerHeight;
let args = EQ.DEFS.CAM.args;
EQ.camera = new THREE.PerspectiveCamera(
  args.fieldOfView,
  args.aspectWidthFactor,
  args.near,
  args.far
);
EQ.renderer = new THREE.WebGLRenderer();
EQ.renderer.setSize(window.innerWidth*(args.aspectWidthFactor-0.01), window.innerHeight);
document.body.appendChild(EQ.renderer.domElement);
EQ.material = new THREE.MeshNormalMaterial();
EQ.geometry = new THREE.BoxGeometry(EQ.DEFS.CUBE.size);
EQ.grid = new EQ.DOM.Grid()



    //*    // Cube : function(args){
    //   /* Main properties */
    //   var _position = {
    //     x : args.pos.x,
    //     y : args.pos.y,
    //     z : args.pos.z
    //   };
    //   var _orbit = {
    //     radius : args.orbit.rad,
    //     speed : args.orbit.spd
    //   };
    //   var _meshColour = args.meshCol;
    //   var _meshMaterial = args.meshMat;
    //   var _mesh = (function(){ if ( args.mesh instanceof THREE.Mesh ) return args.mesh; })();
    //   var _rotation = args.rot;
    //   var _size = args.sz;
    //
    //
    //   /* Motion variables */
    //   // TODO think about these...
    //   var _oscillation;
    //   if ( args.osc !== "undefined" ) {
    //     _oscillation = {
    //       dampening : args.osc.damp,
    //       amplitude : args.osc.amp,
    //       frequency : args.osc.freq,
    //       phase : args.osc.phase
    //     };
    //   } else {
    //     _oscillation = {
    //       dampFactor : EQ.DEF.CUBE.oscillation.dampFactor,       // Gamma, the damping coefficient
    //       amplitude: EQ.DEF.CUBE.oscillation.amplitude,        // Amplitude, initially
    //       frequency: EQ.DEF.CUBE.oscillation.frequency,       // Omega, the angular frequency
    //       phase: EQ.DEF.CUBE.oscillation.phase
    //     };
    //   }
    //
    //   return {
    //     // Getters...
    //     mesh : function(){ return _mesh; },
    //     meshMat : function(){
    //       switch(_mesh.material){
    //         case EQ.ENUM.MESH_MAT.NORMAL:
    //           return "MeshNormalMaterial";
    //         // TODO populate with more of these...
    //         default: return null;
    //       }
    //     },
    //     meshCol : function(){ return _mesh.colour; },
    //     pos : function(){ return _position; },
    //     posX : function(){ return _position.x; },
    //     posY : function(){ return _position.y; },
    //     posZ : function(){ return _position.z; },
    //     orbit : function(){ return _orbit; },
    //     orbitRad : function(){ return _orbit.radius; },
    //     incOrbRad : function(inc){ if ( inc > 0 ) _orbit.radius += inc; },
    //     decOrbRad : function(dec){
    //       if ( dec > 0 ) {
    //         if ( _orbit.speed > 0.0 ) _orbit.radius -= dec;
    //         if ( _orbit.speed < 0.0 ) _orbit.radius = 0.0;
    //       }
    //     },
    //     orbitSpd : function(){ return _orbit.speed; },
    //     incOrbSpd : function(inc){ if ( inc > 0 ) _orbit.speed += inc; },
    //     decOrbSpd : function(dec){
    //       if ( dec > 0 ) {
    //         if ( _orbit.speed > 0.0 ) _orbit.speed -= dec;
    //         if ( _orbit.speed < 0.0 ) _orbit.speed = 0.0;
    //       }
    //     },
    //     rot : function(){ return _rotation; },
    //     incRotate : function(inc){ if ( inc > 0 ) _rotation += inc; },
    //     decRotate : function(dec){
    //       if ( dec > 0 ) {
    //         if ( _rotation > 0.0 ) _rotation -= dec;
    //         if ( _rotation < 0.0 ) _rotation = 0.0;
    //       }
    //     },
    //     sz : function(){ return _size; },
    //     incSize : function(inc){
    //       if ( inc > 0 ) _sz += inc;
    //       else throw new InvalidArgumentException("Arg must be greater than zero!");
    //     },
    //     decSize : function(dec){
    //       if ( dec > 0 ) {
    //         if ( _size > 0.0 ) _size -= dec;
    //         if ( _size < 0.0 ) _size = 0.0;
    //       } else {
    //         throw new InvalidArgumentException("Arg must be greater than zero!");
    //       }
    //     },
    //     // TODO test these and if they work, remove the redundant setters above..
    //     increase : function(prop, amt){
    //       if ( typeof amt === "number" ) {
    //         if ( eval("_"+prop.toString()+'!== "undefined"') ) {
    //           if ( eval("_"+prop.toString()+">0.0") ) {
    //             if ( amt > 0 ) {
    //               eval("_"+prop.toString()+"+=amt");
    //               return true;
    //             } else throw new InvalidArgumentException("'amt' must be greater than zero!",{'amt':amt});
    //           } else throw new InvalidArgumentException("The value of property held in 'prop' must be greater than zero!",{"_"+prop.toString():(eval("_"+prop.toString()))});
    //         } else throw new InvalidArgumentException("'prop' must be a property of this object!",{'prop':prop});
    //       } else throw new InvalidArgumentException("'amt' must be a number!",{'amt':amt});
    //       return false;
    //     },
    //     decrease : function(prop, amt){
    //       if ( typeof amt === "number" ) {
    //         if ( eval("_"+prop.toString()+'!== "undefined"') ) {
    //           if ( eval("_"+prop.toString()+">0.0") ) {
    //             if ( amt > 0 ) {
    //               eval("_"+prop.toString()+"+=amt");
    //               if ( eval("_"+prop.toString()+"<0.0") ) eval("_"+prop.toString()+"=0.0");
    //               return true;
    //             } else throw new InvalidArgumentException("'amt' must be greater than zero!",{'amt':amt});
    //           } else throw new InvalidArgumentException("The value of property held in 'prop' must be greater than zero!",{"_"+prop.toString():(eval("_"+prop.toString()))});
    //         } else throw new InvalidArgumentException("'prop' must be a property of this object!",{'prop':prop});
    //       } else throw new InvalidArgumentException("'amt' must be a number!",{'amt':amt});
    //       return false;
    //     },
    //     initSHM : function(){}, // TODO complete this
    //     initDHM : function(){}, // TODO complete this
    //     update : function(){}   // TODO complete this
    //   };
    // },
    // Cube.prototype : {
    //   constructor : Cube,
    //   toString : function(){
    //     return "Pos=("+this.posX()+","+this.posY()+","+this.posZ()+")\n" +
    //             "Orbit={radius:"+this.orbitRad()+"|speed:"+this.orbitSpd()+"}\n" +
    //             "Mesh="+this.meshMat()+"\n" +
    //             "Rotation="+this.rot()+"\n" +
    //             "Size="+this.sz()+"\n";
    //   }
    // },
    //
    // Pitch : function(){
    //
    // },
    // Pitch.prototype : {
    //
    // },
    //
    // Cell : function(){
    //
    // },
    // Cell.prototype : {
    //
    // },
    //
    // Grid : function(){
    //
    // },
    // Grid.prototype : {
    //
    // }
//   }
//
// };
//
// EQ.CONST.lockConstants();
// EQ.ENUM.lockEnums();
// EQ.DEF.lockDefaults();
// EQ.UTILS.lockUtils();
  // },
//
//   CONF : (function(){
//     var out = {};
//     /*
//     set:
//     -fps
//     -GRID.ascending.notes
//     -GRID.ascending.octvs
//     -GRID.cellSize
//
//     .. a bit of user interactivity anyhow...
//     */
//
//     if ( out === "undefined" ||
//           out === null ||
//           Object.values(out).length === 0 ) {
//       return {  // DEFAULTS ALL RIGHT HERE!!
//         ascending: {
//           notes: EQ.ENUM.DIR.R2L,
//           octaves: EQ.ENUM.DIR.F2B
//         },
//         camera: {
//           fps : (function(){ return EQ.DEF.CAM.framesPerSecond; }()),
//           args : {      // TODO group CAMERA.args even further if necessary.
//             fov : (function(){ return EQ.DEF.CAM.arguments.fov; }()),   // Field of view
//             awf : (function(){ return EQ.DEF.CAM.arguments.awf; }()),    // Aspect Width Factor
//             near : (function(){ return EQ.DEF.CAM.arguments.near; }()),
//             far : (function(){ return EQ.DEF.CAM.arguments.far; }())
//           },
//           initPos : {     // Camera's initial position
//             x : (function(){ return EQ.DEF.CAM.arguments.initialPosition.x; }()),
//             y : (function(){ return EQ.DEF.CAM.arguments.initialPosition.y; }()),
//             z : (function(){ return EQ.DEF.CAM.arguments.initialPosition.z; }())
//           },
//           initView : {     // A point colinear with the camera's centre of view
//             x : (function(){ return EQ.DEF.CAM.arguments.initialView.x; }()),
//             y : (function(){ return EQ.DEF.CAM.arguments.initialView.y; }()),
//             z : (function(){ return EQ.DEF.CAM.arguments.initialView.z; }())
//           }
//         },
//         cube: {
//           sz : (function(){ return EQ.DEF.CUBE.size; }()),
//           rot : (function(){ return EQ.DEF.CUBE.rotation; }()),
//           orb : {
//             rad :(function(){ return EQ.DEF.CUBE.orbit.radius; }()),
//             spd : (function(){ return EQ.DEF.CUBE.orbit.speed; }())
//           },
//           col : (function(){ return EQ.DEF.CUBE.colour; }()),
//           mat : (function(){ return EQ.DEF.CUBE.material; }())
//         },
//         grid: {
//           spc : (function(){ return EQ.DEF.GRID.spacing; }()),
//           ptrn : (function(){ return EQ.DEF.GRID.pattern; }()),
//           size : {
//             x : null,
//             z : null
//           },
//           midi0pos : (function(){ return EQ.DEF.GRID.firstSquareLocation; }())
//         }
//       };
//     } // end if
//     return out;
//   })(),
//
//
//   FLAGS : {
//     stuff : null
//   },
//
//
//   NS : {
//
//     Pitch : function(args){
//       if ( typeof args == "number" ) {  // A single numeric arg
//         var n = EQ.UTILS.freq2note(args);
//         var _midi = n.midi;
//         var _octave = n.octave;
//         var _key = n.key;
//         var _freq = n.freq;
//         var _wavLen = n.wavLen;
//         delete n;
//       } else if ( typeof args == "object" && args.length == 4 ) { // An object, 4 props
//         var _midi = args['midi'];
//         var _octave = args['octave'];
//         var _key = args['key'];
//         var _freq = args['freq'];
//         // var _wavLen = args['wavLen'];
//       } else {
//         throw new Exception(e) { // TODO implement this exception with a little more elegance!
//           console.log("Note constructor received a non-object or non-numeric argument");
//           console.log(e);
//           return null;
//         }
//       }
//       delete args;
//
//       // Getters..
//       var _getMidi = function(){ return _midi; };
//       var _getOctave = function(){ return _octave; };
//       var _getKey = function(){ return _key; };
//       var _getFreq = function(){ return _freq; };
//       var _getNote = function(){ return _key+(_octave).toString(); };
//
//       return {
//         midi : _getMidi,
//         octave : _getOctave,
//         octaveStr : (_getOctave).toString(),
//         key : _getKey,
//         freq : _getFreq,
//         note : _getNote
//       };
//     },
//     Pitch.prototype : {
//       constructor: EQ.NS.Pitch,
//       toString: function(){ return "["+this.midi().toString()+"]: "+this.name()+"("+this.freq().toString()+")"; }
//     },
//
//     Cube : function(args){
//       var _pos = {
//         x : args.position.x,
//         y : args.position.y,
//         z : args.position.z
//       };
//       var _sz = args.size;
//       var _rot = args.rotation;
//       var _orb = {
//         rad : args.orbit.radius,
//         spd : args.orbit.speed
//       };
//       var _col = args.mesh.colour;
//       var _mat = args.mesh.material;
//       // var _activity;
//       return {
//         size : function(){ return _sz; },
//         rotation : function(){ return _rot; },
//         position : function(){ return _pos; },
//         orbit : function(){ return _orb; },
//         colour : function(){ return _col; },
//         material : function(){ return _mat; }
//       };
//     },
//     Cube.prototype : {
//       constructor: EQ.NS.Cube,
//       toString: function(){ return ""; }
//     },
//
//     Cell : function(args){
//       var _cube = args.cube;
//       var _pitch = args.pitch;
//       // var _audible = false;
//       var _volume = 0.0;
//
//       return {
//         cube : function(){ return _cube; },
//         pitch : function(){ return _pitch; },
//         audible : function(arg){ arg === "undefined" ? return _audible : _audible = arg ; },
//         volume : function(arg){ arg === "undefined" ? return _volume : _volume = arg ; },
//         volUp : function(arg){ _volume += arg; },
//         volDown : function(arg){ if ( _volume>0 ) { _volume -= arg; if ( _volume<0 ) { _volume=0; } } else { return false; }}
//       };
//       // var cube = function
//       // var pitch = function(){ return _pitch; };
//     },
//     Cell.prototype : {
//       constructor: EQ.NS.Cell,
//       toString: function(){ return ""; }
//     },
//
//     Grid : (function(){
//       var out = {};
//       out.midiArr = [];
//       var midi = 0;
//       for ( var iZ=0 ; iZ<11 ; iZ++ ) {
//         for ( var iX=0 ; iX<12 ; iX++ ) {
//           let c = new EQ.NS.Cube({ position : {x:iX,y:0,z:iZ},
//             size : EQ.CONST.CUBE.size,
//             rotation : EQ.CONST.CUBE.rot,
//             mesh : { colour : null, material : EQ.ENUM.MESH_MAT.NORMAL }
//           });
//           var geometry = new THREE.BoxGeometry(c.size,c.size,c.size);
//           var material = new THREE.MeshNormalMaterial();
//           var mesh = new THREE.Mesh(geometry,material);
//           scene.add(cube);
//           let p = new EQ.NS.Pitch(EQ.CONST.PITCH.freqs[midi]);
//           Object.freeze(p);
//           out.arr[midi] = new EQ.NS.Cell({ cube:c, pitch:p });
//         }
//       }
//       return out;
//
//
//     }),
//     Grid.prototype : {
//       constructor : EQ.NS.Grid
//     },
//     time : 0.0
//   }
// };
// // Object.freeze(EQ.NS);
//
// var grid = new EQ.NS.Grid();
//
// var aspect = window.innerWidth * EQ.DEF.CAM.aspectWidthFactor;
// var camera = new THREE.PerspectiveCamera(75,aspect,EQ.DEF.CAM.near,EQ.DEF.CAM.far);
// var renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth*(EQ.DEF.CAM.aspectWidthFactor-0.01), window.innerHeight);
// document.body.appendChild(renderer.domElement);
