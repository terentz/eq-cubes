/**
 * This singleton is reserved for CONST.
 * TODO identify the best approach to ensuring that EQK and all its properties,
 * at all levels, are strictly CONSTANT!!
 */
// var EQK = {
//   DIR_ENUM : {  // Enum for the direction in which ascending notes and octaves run.
//     F2B:0,
//     B2F:1,
//     L2R:2,
//     R2L:3
//   },
//   PITCH : {
//     A4 : 440,
//     // TODO ascertain the better of the following two lines.
//     // C0 : eqK.A4*Math.pow(2, -4.75),
//     C0 : (function(){ return EQK.PITCH.A4*Math.pow(2, -4.75); }()),
//     // QUESTION Do best practices advise that all the properties of a const object be declared in upper- or lowercase?
//     notes : ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],
//     octaves : [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//     freqs1D : [
//       8.176, 8.662, 9.177, 9.723, 10.301, 10.914, 11.563, 12.250, 12.979, 13.750, 14.568, 15.434,
//       16.352, 17.324, 18.354, 19.445, 20.602, 21.827, 23.125, 24.500, 25.957, 57.500, 29.135, 30.868,
//       32.703, 34.684, 36.708, 38.891, 41.203, 43.654, 46.249, 48.999, 51.913, 55.000, 58.270, 61.735,
//       65.406, 69.296, 73.416, 77.782, 82.407, 87.307, 92.499, 97.999, 103.83, 110.00, 116.54, 123.47,
//       130.81, 138.59, 146.83, 155.56, 164.81, 174.61, 185.00, 196.00, 207.65, 220.00, 233.08, 246.94,
//       261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392.00, 415.30, 440.00, 466.16, 493.88,
//       523.25, 554.37, 587.33, 622.25, 659.26, 698.46, 739.99, 783.99, 830.61, 880.00, 932.33, 987.77,
//       1046.5, 1108.7, 1174.7, 1244.5, 1318.5, 1396.9, 1480.0, 1568.0, 1661.2, 1760.0, 1864.7, 1975.5,
//       2093.0, 2217.5, 2349.3, 2489.0, 2637.0, 2793.8, 2960.0, 3136.0, 3322.4, 3520.0, 3729.3, 3951.1,
//       4186.0, 4434.9, 4698.6, 4978.0, 5274.0, 5587.7, 5919.9, 6271.9, 6644.9, 7040.0, 7458.6, 7902.1,
//       8372.0, 8869.8, 9397.3, 9956.1, 10548.1, 11175.3, 11839.8, 12543.9
//     ],
//     freqs2D : [
//       [ 8.176, 8.662, 9.177, 9.723, 10.301, 10.914, 11.563, 12.250, 12.979, 13.750, 14.568, 15.434 ],
//       [ 16.352, 17.324, 18.354, 19.445, 20.602, 21.827, 23.125, 24.500, 25.957, 57.500, 29.135, 30.868 ],
//       [ 32.703, 34.684, 36.708, 38.891, 41.203, 43.654, 46.249, 48.999, 51.913, 55.000, 58.270, 61.735 ],
//       [ 65.406, 69.296, 73.416, 77.782, 82.407, 87.307, 92.499, 97.999, 103.83, 110.00, 116.54, 123.47 ],
//       [ 130.81, 138.59, 146.83, 155.56, 164.81, 174.61, 185.00, 196.00, 207.65, 220.00, 233.08, 246.94 ],
//       [ 261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392.00, 415.30, 440.00, 466.16, 493.88 ],
//       [ 523.25, 554.37, 587.33, 622.25, 659.26, 698.46, 739.99, 783.99, 830.61, 880.00, 932.33, 987.77 ],
//       [ 1046.5, 1108.7, 1174.7, 1244.5, 1318.5, 1396.9, 1480.0, 1568.0, 1661.2, 1760.0, 1864.7, 1975.5 ],
//       [ 2093.0, 2217.5, 2349.3, 2489.0, 2637.0, 2793.8, 2960.0, 3136.0, 3322.4, 3520.0, 3729.3, 3951.1 ],
//       [ 4186.0, 4434.9, 4698.6, 4978.0, 5274.0, 5587.7, 5919.9, 6271.9, 6644.9, 7040.0, 7458.6, 7902.1 ],
//       [ 8372.0, 8869.8, 9397.3, 9956.1, 10548.1, 11175.3, 11839.8, 12543.9 ]
//     ],
//     octsAndFreqs : {
//       '-1': [ 8.176, 8.662, 9.177, 9.723, 10.301, 10.914, 11.563, 12.250, 12.979, 13.750, 14.568, 15.434 ],
//       '0' : [ 16.352, 17.324, 18.354, 19.445, 20.602, 21.827, 23.125, 24.500, 25.957, 57.500, 29.135, 30.868 ],
//       '1' : [ 32.703, 34.684, 36.708, 38.891, 41.203, 43.654, 46.249, 48.999, 51.913, 55.000, 58.270, 61.735 ],
//       '2' : [ 65.406, 69.296, 73.416, 77.782, 82.407, 87.307, 92.499, 97.999, 103.83, 110.00, 116.54, 123.47 ],
//       '3' : [ 130.81, 138.59, 146.83, 155.56, 164.81, 174.61, 185.00, 196.00, 207.65, 220.00, 233.08, 246.94 ],
//       '4' : [ 261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392.00, 415.30, 440.00, 466.16, 493.88 ],
//       '5' : [ 523.25, 554.37, 587.33, 622.25, 659.26, 698.46, 739.99, 783.99, 830.61, 880.00, 932.33, 987.77 ],
//       '6' : [ 1046.5, 1108.7, 1174.7, 1244.5, 1318.5, 1396.9, 1480.0, 1568.0, 1661.2, 1760.0, 1864.7, 1975.5 ],
//       '7' : [ 2093.0, 2217.5, 2349.3, 2489.0, 2637.0, 2793.8, 2960.0, 3136.0, 3322.4, 3520.0, 3729.3, 3951.1 ],
//       '8' : [ 4186.0, 4434.9, 4698.6, 4978.0, 5274.0, 5587.7, 5919.9, 6271.9, 6644.9, 7040.0, 7458.6, 7902.1 ],
//       '9' : [ 8372.0, 8869.8, 9397.3, 9956.1, 10548.1, 11175.3, 11839.8, 12543.9 ]
//     }
//   },
//   CAMERA : {
//     args : {      // TODO group CAMERA.args even further if necessary.
//       fov : 60.0,   // Field of view
//       awf : 0.9,    // Aspect Width Factor
//       near : 0.1,
//       far : 2000.0
//     },
//     initPos : {     // Camera's initial position
//       x : 0.0,
//       y : 0.0,
//       z : 5.0
//     },
//     initDir : {     // Camera's initial viewing direction (as unit vector??)
//       x : 0.0,
//       y : 0.0,
//       z : 0.0
//     },
//     fps : 60.0      // Frames Per Second
//   },
//   CUBE : {
//     size : 1.0,
//     rotSpd : 0.04,    // This could just as well be individualised
//     orbit : {
//       rad : 1.5,
//       spd : 6.0
//     },
//     colour : null       // TODO complete this!
//   },
//   GRID : {
//     ascentDir : {
//       notes: EQK.DIR_ENUM.F2B,
//       octvs: EQK.DIR_ENUM.L2R
//     }
//     cellSz : 2.5,
//     cols : (function(){ return EQK.PITCH.notes.length; }()),
//     rows : (function(){ return EQK.PITCH.octaves.length; }()),
//     span : {
//       x : (function(){ return EQK.GRID.cols*EQK.GRID.cellSz; }()),
//       z : (function(){ return EQK.GRID.rows*EQK.GRID.cellSz; }())
//     },
//     limit : {
//       x : (function(){ return EQK.GRID.span.x/2.0; }()),
//       z : (function(){ return EQK.GRID.span.z/2.0; }())
//     }
//   }/*,
//   UTILS : {
//   }*/
// };
// Object.freeze(EQK);

// var EQU = {
  // freq2midi : function(freq){
  //   return Math.round(12*Math.log2(freq/EQK.PITCH.C0))+12;
  // },
  // midi2octave : function(midi){
  //   return Math.floor(midi/12)-1;
  // },
  // midi2key : function(midi){
  //   return midi % 12;
  // },
  // midi2freq : function(midi){
  //   return EQK.PITCH.freqs1D[midi];
  // },
  // freq2note_v1 : function(freq){
  //   var _midi = Math.round(12*Math.log2(freq/EQK.PITCH.C0))+12;
  //   var _octave = Math.floor(_midi/12)-1;
  //   var _key = _midi % 12;
  //   var _freq = EQU.midi2freq(_midi);
  //   return { 'midi':_midi, 'octave':_octave, 'key':EQK.PITCH.notes[_key], 'freq':_freq };
  // },
  // freq2note_v2 : function(freq){
  //   var _midi = EQU.freq2midi(freq);
  //   var _octave = EQU.midi2octave(_midi);
  //   var _key = EQU.midi2key(_midi);
  //   var _freq = EQU.midi2freq(_midi);
  //   return { 'midi':_midi, 'octave':_octave, 'key':EQK.PITCH.notes[_key], 'freq':_freq };
  // },
  // freq2note_v3 : function(freq){
  //   var _midi = EQU.freq2midi(freq);
  //   return { 'midi': _midi,
  //           'octave': EQU.midi2octave(_midi),
  //           'key': EQU.midi2key(_midi),
  //           'freq': EQU.midi2freq(_midi)
  //   };
  // },
  // // The following line is the test carousel for 'freq2obj_vX'
  // // Also, QUESTION: which form is better here of the two options?
  // freq2note : EQU.freq2note_v1
  // freq2note : this.freq2note_v1
// };
// Object.freeze(EQU);
// EQ.scene = new THREE.Scene();
var scene = new THREE.Scene();
var EQ = {

  // scene : new THREE.Scene(),
};
  CONST : {
    PITCH : {
      A4 : 440,
      // TODO ascertain the better of the following two lines.
      // C0 : eqK.A4*Math.pow(2, -4.75),
      C0 : (function(){ return EQ.CONST.PITCH.A4*Math.pow(2, -4.75); }()),
      // QUESTION Do best practices advise that all the properties of a const object be declared in upper- or lowercase?
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
      ]
    },
    lockConstants : function(){
      Object.freeze(EQ.CONST.PITCH);  // TODO may need to go deeper here
      Object.freeze(EQ.CONST.PITCH.A4);
      Object.freeze(EQ.CONST.PITCH.C0);
      Object.freeze(EQ.CONST.PITCH.notes);
      Object.freeze(EQ.CONST.PITCH.octaves);
      Object.freeze(EQ.CONST.PITCH.freqs);
      delete EQ.CONST.lockConstants;
    }()
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
      SNAKE : 0,
      HILL : 1,
      SPIRAL_IN : 2,
      SPIRAL_OUT :3
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
      Object.freeze(EQ.ENUM.AXIS);
      Object.freeze(EQ.ENUM.DIR);
      Object.freeze(EQ.ENUM.GRID_PATTERN);
      Object.freeze(EQ.ENUM.MESH_MAT);
      Object.freeze(EQ.ENUM.MOVE);
      delete EQ.ENUM.lockEnums;
    }()
  },

  DEF : {  // Defaults

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
      colour : null,       // TODO complete this!
      material : EQ.ENUM.MESH_MAT.NORMAL
    },

    GRID : {
      spacing : 2.5,
      pattern : EQ.ENUM.GRID_PATTERN.HILL
      firstSquareLocation : {
        x : null,
        y : null,
        z : null
      }
    },

    lockDefaults : function() {
      Object.freeze(EQ.DEF.CAM);
      Object.freeze(EQ.DEF.CUBE);
      Object.freeze(EQ.DEF.CUBE.orbit);
      Object.freeze(EQ.DEF.GRID);
      delete EQ.DEF.lockDefaults;
    }()
  },

  CONF : (function(){
    var out = {};
    /*
    set:
    -fps
    -GRID.ascending.notes
    -GRID.ascending.octvs
    -GRID.cellSize

    .. a bit of user interactivity anyhow...
    */

    if ( out === "undefined" ||
          out === null ||
          Object.values(out).length === 0 ) {
      return {  // DEFAULTS ALL RIGHT HERE!!
        ascending: {
          notes: EQ.ENUM.DIR.R2L,
          octaves: EQ.ENUM.DIR.F2B
        },
        camera: {
          fps : (function(){ return EQ.DEF.CAM.framesPerSecond; }()),
          args : {      // TODO group CAMERA.args even further if necessary.
            fov : (function(){ return EQ.DEF.CAM.arguments.fov; }()),   // Field of view
            awf : (function(){ return EQ.DEF.CAM.arguments.awf; }()),    // Aspect Width Factor
            near : (function(){ return EQ.DEF.CAM.arguments.near; }()),
            far : (function(){ return EQ.DEF.CAM.arguments.far; }())
          },
          initPos : {     // Camera's initial position
            x : (function(){ return EQ.DEF.CAM.arguments.initialPosition.x; }()),
            y : (function(){ return EQ.DEF.CAM.arguments.initialPosition.y; }()),
            z : (function(){ return EQ.DEF.CAM.arguments.initialPosition.z; }())
          },
          initView : {     // A point colinear with the camera's centre of view
            x : (function(){ return EQ.DEF.CAM.arguments.initialView.x; }()),
            y : (function(){ return EQ.DEF.CAM.arguments.initialView.y; }()),
            z : (function(){ return EQ.DEF.CAM.arguments.initialView.z; }())
          }
        },
        cube: {
          sz : (function(){ return EQ.DEF.CUBE.size; }()),
          rot : (function(){ return EQ.DEF.CUBE.rotation; }()),
          orb : {
            rad :(function(){ return EQ.DEF.CUBE.orbit.radius; }()),
            spd : (function(){ return EQ.DEF.CUBE.orbit.speed; }())
          },
          col : (function(){ return EQ.DEF.CUBE.colour; }()),
          mat : (function(){ return EQ.DEF.CUBE.material; }())
        },
        grid: {
          spc : (function(){ return EQ.DEF.GRID.spacing; }()),
          ptrn : (function(){ return EQ.DEF.GRID.pattern; }()),
          size : {
            x : null,
            z : null
          },
          midi0pos : (function(){ return EQ.DEF.GRID.firstSquareLocation; }())
        }
      };
    } // end if
    return out;
  })(),
    // conf : (function(){/* TODO do stuff here, including:
    //   var out = {};
    //   set:
    //   -fps
    //   -GRID.ascending.notes
    //   -GRID.ascending.octvs
    //   -GRID.cellSize
    //
    //   .. a bit of user interactivity anyhow...
    //   */
    //
    //   if ( out === "undefined" ||
    //         out === null ||
    //         Object.values(out).length === 0 ) {
    //     return {  // DEFAULTS ALL RIGHT HERE!!
    //       ascending: {
    //         notes: EQ.ENUM.DIR.R2L,
    //         octaves: EQ.ENUM.DIR.F2B
    //       },
    //       camera: {
    //         fps : (function(){ return EQ.DEF.CAM.framesPerSecond; }()),
    //         args : {      // TODO group CAMERA.args even further if necessary.
    //           fov : (function(){ return EQ.DEF.CAM.arguments.fov; }()),   // Field of view
    //           awf : (function(){ return EQ.DEF.CAM.arguments.awf; }()),    // Aspect Width Factor
    //           near : (function(){ return EQ.DEF.CAM.arguments.near; }()),
    //           far : (function(){ return EQ.DEF.CAM.arguments.far; }())
    //         },
    //         initPos : {     // Camera's initial position
    //           x : (function(){ return EQ.DEF.CAM.arguments.initialPosition.x; }()),
    //           y : (function(){ return EQ.DEF.CAM.arguments.initialPosition.y; }()),
    //           z : (function(){ return EQ.DEF.CAM.arguments.initialPosition.z; }())
    //         },
    //         initView : {     // A point colinear with the camera's centre of view
    //           x : (function(){ return EQ.DEF.CAM.arguments.initialView.x; }()),
    //           y : (function(){ return EQ.DEF.CAM.arguments.initialView.y; }()),
    //           z : (function(){ return EQ.DEF.CAM.arguments.initialView.z; }())
    //         }
    //       },
    //       cube: {
    //         sz: (function(){ return EQ.DEF.CUBE.size; }()),
    //         rot : (function(){ return EQ.DEF.CUBE.rotation; }()),
    //         orb : {
    //           rad :(function(){ return EQ.DEF.CUBE.orbit.radius; }()),
    //           spd : (function(){ return EQ.DEF.CUBE.orbit.speed; }())
    //         },
    //         col : (function(){ return EQ.DEF.CUBE.colour; }()),
    //         mat : (function(){ return EQ.DEF.CUBE.material; }())
    //       },
    //       grid: {
    //         spc : (function(){ return EQ.DEF.GRID.spacing; }()),
    //         ptrn : (function(){ return EQ.DEF.GRID.pattern; }()),
    //         span : {
    //           x : null,
    //           z : null
    //         },
    //         midi0pos : (function(){ return EQ.DEF.GRID.firstSquareLocation; }())
    //       }
    //     };
    //   } // end if
    //   return out;
    // }()),

  //   time : 0.0
  //
  //   // GRID : {
  //   //   ascending : {
  //   //     notes: (function(){ return EQ.CONF.conf.ascending.notes; }()),
  //   //     octaves: (function(){ return EQ.CONF.conf.ascending.octaves; }())
  //   //   },
  //   //   spacing : (function(){ return EQ.CONF.conf.cube.spc; }),
  //   //   cols : null,
  //   //   rows : null,
  //   //   span : { x : null, z : null },
  //   //   orientGrid : function(){
  //   //     var wd, dp;
  //   //     if ( EQ.CONF.GRID.ascending.octaves % 2 == 0 ) {
  //   //       dp = EQ.CONST.PITCH.octaves.length;
  //   //       wd = EQ.CONST.PITCH.notes.length;
  //   //     } else {
  //   //       wd = EQ.CONST.PITCH.octaves.length;
  //   //       dp = EQ.CONST.PITCH.notes.length;
  //   //     }
  //   //     EQ.NS.GRID.span.x = wd;
  //   //     EQ.NS.GRID.span.z = dp;
  //   //   }(),
  //   //   reach : {
  //   //     x : (function(){ return EQ.CONF.GRID.span.x/2.0; }()),
  //   //     z : (function(){ return EQ.CONF.GRID.span.z/2.0; }())
  //   //   },
  //   //   midi0 : (function(){
  //   //     var x0, z0;
  //   //     switch(EQ.CONST.GRID.ascending.octaves){
  //   //       case EQ.ENUM.DIR.F2B:
  //   //         z0 = EQ.CONF.GRID.reach.z - EQ.CONF.GRID.spc/2.0;
  //   //         break;
  //   //       case EQ.ENUM.DIR.L2R:
  //   //         x0 = -EQ.CONF.GRID.reach.x - EQ.CONF.GRID.spc/2.0;
  //   //         break;
  //   //       case EQ.ENUM.DIR.B2F:
  //   //         z0 = -EQ.CONF.GRID.reach.z - EQ.CONF.GRID.spc/2.0;
  //   //         break;
  //   //       case EQ.ENUM.DIR.R2L:
  //   //         x0 = EQ.CONF.GRID.reach.x - EQ.CONF.GRID.spc/2.0;
  //   //         break;
  //   //       default:
  //   //         alert("Unreachable code!");
  //   //         break;
  //   //     }
  //   //
  //   //     switch(EQ.CONST.GRID.ascending.notes){
  //   //       case EQ.ENUM.DIR.F2B:
  //   //         z0 = EQ.CONF.GRID.reach.z - EQ.CONF.GRID.spc/2.0;
  //   //         break;
  //   //       case EQ.ENUM.DIR.L2R:
  //   //         x0 = -EQ.CONF.GRID.reach.x - EQ.CONF.GRID.spc/2.0;
  //   //         break;
  //   //       case EQ.ENUM.DIR.B2F:
  //   //         z0 = -EQ.CONF.GRID.reach.z - EQ.CONF.GRID.spc/2.0;
  //   //         break;
  //   //       case EQ.ENUM.DIR.R2L:
  //   //         x0 = EQ.CONF.GRID.reach.x - EQ.CONF.GRID.spc/2.0;
  //   //         break;
  //   //       default:
  //   //         alert("Unreachable code!");
  //   //         break;
  //   //     }
  //   //
  //   //     // test lines
  //   //     console.log("midi0 = ("+x0.toString()+","+z0.toString()+")");
  //   //     return { x : x0, z : z0 };
  //   //   }())
  //   // }
  // },

  FLAGS : {
    stuff : null
  },

  UTILS : {
    /* Conversions from frequency to midi or Note object, and from midi to octave, key, or frequency */
    freq2midi : function(freq){
      return Math.round(12*Math.log2(freq/EQ.CONST.PITCH.C0))+12;
    },
    midi2octave : function(midi){
      return Math.floor(midi/12)-1;
    },
    midi2key : function(midi){
      return midi % 12;
    },
    midi2freq : function(midi){
      return EQ.CONST.PITCH.freqs1D[midi];
    },
    freq2note : function(freq){
      var _midi = EQ.UTILS.freq2midi(freq);
      return { 'midi': _midi,
              'octave': EQ.UTILS.midi2octave(_midi),
              'key': EQ.UTILS.midi2key(_midi),
              'freq': EQ.UTILS.midi2freq(_midi)
      };
    }
  },

  NS : {

    Pitch : function(args){
      if ( typeof args == "number" ) {  // A single numeric arg
        var n = EQ.UTILS.freq2note(args);
        var _midi = n.midi;
        var _octave = n.octave;
        var _key = n.key;
        var _freq = n.freq;
        var _wavLen = n.wavLen;
        delete n;
      } else if ( typeof args == "object" && args.length == 4 ) { // An object, 4 props
        var _midi = args['midi'];
        var _octave = args['octave'];
        var _key = args['key'];
        var _freq = args['freq'];
        // var _wavLen = args['wavLen'];
      } else {
        throw new Exception(e) { // TODO implement this exception with a little more elegance!
          console.log("Note constructor received a non-object or non-numeric argument");
          console.log(e);
          return null;
        }
      }
      delete args;

      // Getters..
      var _getMidi = function(){ return _midi; };
      var _getOctave = function(){ return _octave; };
      var _getKey = function(){ return _key; };
      var _getFreq = function(){ return _freq; };
      var _getNote = function(){ return _key+(_octave).toString(); };

      return {
        midi : _getMidi,
        octave : _getOctave,
        octaveStr : (_getOctave).toString(),
        key : _getKey,
        freq : _getFreq,
        note : _getNote
      };
    },
    Pitch.prototype : {
      constructor: EQ.NS.Pitch,
      toString: function(){ return "["+this.midi().toString()+"]: "+this.name()+"("+this.freq().toString()+")"; }
    },

    Cube : function(args){
      var _pos = {
        x : args.position.x,
        y : args.position.y,
        z : args.position.z
      };
      var _sz = args.size;
      var _rot = args.rotation;
      var _orb = {
        rad : args.orbit.radius,
        spd : args.orbit.speed
      };
      var _col = args.mesh.colour;
      var _mat = args.mesh.material;
      // var _activity;
      return {
        size : function(){ return _sz; },
        rotation : function(){ return _rot; },
        position : function(){ return _pos; },
        orbit : function(){ return _orb; },
        colour : function(){ return _col; },
        material : function(){ return _mat; }
      }
    },
    Cube.prototype : {
      constructor: EQ.NS.Cube,
      toString: function(){ return ""; }
    },

    Cell : function(args){
      var _cube = args.cube;
      var _pitch = args.pitch;
      // var _audible = false;
      var _volume = 0.0;

      return {
        cube : function(){ return _cube; },
        pitch : function(){ return _pitch; },
        audible : function(arg){ arg === "undefined" ? return _audible : _audible = arg ; },
        volume : function(arg){ arg === "undefined" ? return _volume : _volume = arg ; },
        volUp : function(arg){ _volume += arg; },
        volDown : function(arg){ if ( _volume>0 ) { _volume -= arg; if ( _volume<0 ) { _volume=0; } } else { return false; }}
      };
      var cube = function
      var pitch = function(){ return _pitch; };
    },
    Cell.prototype : {
      constructor: EQ.NS.Cell,
      toString: function(){ return ""; }
    },

    Grid : (function(){
      var out = {};
      out.midiArr = [];
      var midi = 0;
      for ( var iZ=0 ; iZ<11 ; iZ++ ) {
        for ( var iX=0 ; iX<12 ; iX++ ) {
          let c = new EQ.NS.Cube({ position : {x:iX,y:0,z:iZ},
            size : EQ.CONST.CUBE.size,
            rotation : EQ.CONST.CUBE.rot,
            mesh : { colour : null, material : EQ.ENUM.MESH_MAT.NORMAL }
          });
          var geometry = new THREE.BoxGeometry(c.size,c.size,c.size);
          var material = new THREE.MeshNormalMaterial();
          var mesh = new THREE.Mesh(geometry,material);
          scene.add(cube);
          let p = new EQ.NS.Pitch(EQ.CONST.PITCH.freqs[midi]);
          Object.freeze(p);
          out.arr[midi] = new EQ.NS.Cell({ cube:c, pitch:p });
        }
      }
      return out;

      // var midiMax = EQ.CONST.PITCH.freqs.length;
      // // if ( EQ.CONF.conf.g)
      // var firstX = EQ.CONF.GRID.midi0.x;
      // var lastX = (-1)*firstX;
      // var firstZ = EQ.CONF.GRID.midi0.z;
      // var lastZ = (-1)*firstZ;
      // var midi = 0;
      // if ( firstX < 0 ) {
      //   xCond = "iX<=lastX";
      //   xUpdate = "iX++";
      // } else {
      //   xCond = "iX>=lastX";
      //   xUpdate = "iX--";
      // }
      // if ( firstZ < 0 ) {
      //   zCond = "iZ<=lastZ";
      //   zUpdate = "iZ++";
      // } else {
      //   zCond = "iZ>=lastZ";
      //   zUpdate = "iZ--";
      // }
      // var xUpdate = firstX < 0 ? "iX++" : "iX--";
      // for ( var iZ=firstZ ; eval(zCond) ; eval(zUpdate) ) {
      //   for ( var iX=firstX ; eval(xCond) ; eval(xUpdate) ) {
      //
      //     let cube = new Cube({ position : {x:iX,y:0,z:iZ},
      //       rotation : EQ.CONST.CUBE.rot })
      //     let cell = new Cell()
      //
      //
      //     out.arr[midi] = cell;   // Ideally, clone 'cell', then delete it..
      //     // delete cell;
      //   }
      //
      //
      // }
      // delete firstX, lastX, firstZ, lastZ, midi;
    }),
    Grid.prototype : {
      constructor : EQ.NS.Grid
    },
    time : 0.0
  }

};
// Object.freeze(EQ.NS);

var grid = new EQ.NS.Grid();

var aspect = window.innerWidth * EQ.DEF.CAM.aspectWidthFactor;
var camera = new THREE.PerspectiveCamera(75,aspect,EQ.DEF.CAM.near,EQ.DEF.CAM.far);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth*(EQ.DEF.CAM.aspectWidthFactor-0.01), window.innerHeight);
document.body.appendChild(renderer.domElement);



/**
 * This is used to define the notes/cubes as the grid is built.
 * Some flags and parameters can be changed dynamically during replay.
 *
 * @param args {number|object} Needs to be either a number{float}, 'freq', otherwise an object
 * with four properties: 'midi'{int}, 'octave'{int}, 'note'{string}, 'freq'{float}.
 *
 * @return {object} An instance of NoteObj.
 */
// function Note(args){
//   if ( typeof args == "number" ) {  // A single numeric arg
//     var tempNote = eqUtils.freq2obj_v1(args);
//     var _midi = tempNote.midi;
//     var _octave = tempNote.octave;
//     var _note = tempNote.note;
//     var _freq = tempNote.freq;
//     delete tempNote;
//   } else if ( typeof args == "object" && args.length == 4 ) { // An object, 4 props
//     var _midi = args['midi'];
//     var _octave = args['octave'];
//     var _note = args['note'];
//     var _freq = args['freq'];
//   } else {
//     throw new Exception(e) { // TODO implement this exception with a little more elegance!
//       console.log("NoteObj constructor received a non-object or non-numeric argument");
//       console.log(e);
//       return null;
//     }
//   }
//   delete args;
//
//   // Getters..
//   var _getMidi = function(){ return _midi; };
//   var _getOctave = function(){ return _octave; };
//   var _getNote = function(){ return _note; };
//   var _getFreq = function(){ return _freq; };
//   var _getName = function(){ return _note+(_octave).toString(); };
//
//   return {
//     midi : _getMidi,
//     octaveNum : _getOctave,
//     octaveStr : (_getOctave).toString(),
//     note : _getNote,
//     freq : _getFreq,
//     name : _getName
//   };
// }
// Note.prototype = {
//   constructor: Note,
//   toString: function(){ return "["+this.midi().toString()+"]: "+this.name()+"("+this.freq().toString()+")"; }
// };

// var eqUtils = {
//   freq2midi : function(freq){
//     return Math.round(12*Math.log2(freq/eqK.C0))+12;
//   },
//   midi2octave : function(midi){
//     return Math.floor(midi/12)-1;
//   },
//   midi2note : function(midi){
//     return midi % 12;
//   },
//   midi2freq : function(midi){
//     return eqK.freqs1D[midi];
//   },
//   freq2obj_v1 : function(freq){
//     var _midi = Math.round(12*Math.log2(freq/eqK.C0))+12;
//     var _octave = Math.floor(_midi/12)-1;
//     var _note = _midi % 12;
//     var _freq = eqUtils.midi2freq(_midi);
//     return { 'midi':_midi, 'octave':_octave, 'note':eqK.notes[_note], 'freq':_freq };
//   },
//   freq2obj_v2 : function(freq){
//     var _midi = eqUtils.freq2midi(freq);
//     var _octave = eqUtils.midi2octave(_midi);
//     var _note = eqUtils.midi2note(_midi);
//     var _freq = eqUtils.midi2freq(_midi);
//     return { 'midi':_midi, 'octave':_octave, 'note':eqK.notes[_note], 'freq':_freq };
//   },
//   freq2obj_v3 : function(freq){
//     var _midi = eqUtils.freq2midi(freq);
//     return { 'midi': _midi,
//             'octave': eqUtils.midi2octave(_midi),
//             'note': eqUtils.midi2note(_midi),
//             'freq': eqUtils.midi2freq(_midi)
//     };
//   },
//   // The following line is the test carousel for 'freq2obj_vX'
//   freq2obj : eqUtils.freq2obj_v1
// };
// Object.freeze(eqUtils);

// eq.grid = (function(){
//
// }());

// camera.position.z = params.camera.pos.z

/**
 *
 * @param {Object} note An object of type eq.Note.
 * @param {int} m The MIDI note number.
 * @param {float} f The note's standard frequency.
 * @param {float} wl The note's wavelength (in metres).
 * @param {Object} lim An object holding the note's lower- & upper-bound frequencies.
 * @param {float} hi The highest associated frequency.
 * @param {Object}
 */
// eq.Cube = function(desc,,pos,sz,rSpd,oRad,oSpd){
//   // Musical properties..
//   var fullname = desc.oct.toString()+desc.name;
//   var midi = desc.midi;
//   var freq = desc.freq;
//   var wavLen = desc.wavLen;
//   var minFreq = desc.lo;
//   var maxFreq = desc.hi;
//   // Geometry/Phys..
//   this.xPos = x;
//   this.yPos = y;
//   this.zPos = z;
//   this.size = sz;
//   this.rotation = rSpd;
//   this.orbRad = oRad;
//   this.speed = spd;
//   // Sound & motion flags & param's..
//   this.constOsc = false;
//   this.dampedOsc = false;
//   this.
//   this.vol = 0;
//
// };
//
// eq.buildGrid = function(){
//
// }();
//
// eq.grid : {
//   '-1': [
//     {
//       name : 'C-1',
//       midi : 0,
//       minFreq : ,
//       actFreq : 8.176,
//       maxFreq : ,
//       wavLen :
//     },
//     {
//       name : 'C#-1',
//       midi : 1,
//       minFreq : ,
//       actFreq : 8.662,
//       maxFreq : ,
//       wavLen :
//     },
//     {
//       name : 'D-1',
//       midi : 2,
//       minFreq : ,
//       actFreq : 9.177,
//       maxFreq : ,
//       wavLen :
//     },
//     {
//       name : 'D#-1',
//       midi : 3,
//       minFreq : ,
//       actFreq : 9.723,
//       maxFreq : ,
//       wavLen :
//     },
//     {
//       name : 'E-1',
//       midi : 4,
//       minFreq : ,
//       actFreq : 10.301,
//       maxFreq : ,
//       wavLen :
//     },
//     {
//       name : 'F-1',
//       midi : 5,
//       minFreq : ,
//       actFreq : 10.914,
//       maxFreq : ,
//       wavLen :
//     },
//     {
//       name : 'F#-1',
//       midi : 6,
//       minFreq : ,
//       actFreq : 11.563,
//       maxFreq : ,
//       wavLen :
//     },
//     {
//       name : 'G-1',
//       midi : 7,
//       minFreq : ,
//       actFreq : 12.250,
//       maxFreq : ,
//       wavLen :
//     },
//     {
//       name : 'G#-1',
//       midi : 8,
//       minFreq : ,
//       actFreq : 12.979,
//       maxFreq : ,
//       wavLen :
//     },
//     {
//       name : 'A-1',
//       midi : 9,
//       minFreq : ,
//       actFreq : 13.750,
//       maxFreq : ,
//       wavLen :
//     },
//     {
//       name : 'C-1',
//       midi : 0,
//       minFreq : ,
//       actFreq : 8.176,
//       maxFreq :
//       wavLen :
//     },
//     {
//       name : 'C-1',
//       midi : 0,
//       minFreq : ,
//       actFreq : 8.176,
//       maxFreq :
//       wavLen :
//     },
//   ],
//   '0': [
//
//   ]
// };
//
// eq.Note : function() {
//
// };
//
// /* SYSTEM CONST */
//
// var sin = Math.sin,
//   exp = Math.exp,
//   floor = Math.floor,
//   pi = Math.PI;
//
//
// /* SYSTEM PARAMETERS */
//
// var note = {
//   octave: ,
//   noteName: ,
//   noteIndex: ,
//   frequency: ,
//   wavelength: ,
//   volumePrevFrame: ,
//   valumeCurrFrame: ,
//   oscillating: ,
//   oscType: ,
//
//   oscPrevYPos: ,
//   oscCurrYPos: ,
//
// };
//
// // Frame flags..
// var flags = {
//   oscCurrYPos: 0.0,
//   oscPrevYPos: -1.0
// };
//
// // Initialise time..
// var time = 0.0;
// // Incremental constant..
// var frameRate = 60.0;

// Adjustable param's..
var params =
  osc: {
    amp: 1.0,        // Amplitude, initially
    damp: 0.15, // Gamma, the damping coefficient
    freq: 8.0,       // Omega, the angular frequency
    phase: 0.0
  },
  orbit: {
    size: 1.5,
    speed: 6.0
  },
  cellMargin: 2.0
};
