// TODO replace all Object.freeze() calls with recursive freezes from Immutable.js

var EQ = {

  XCPTN : {   /* EXCEPTION CLASSES */
    InvalidArgumentException : function(_msg,_data){
      this.msg = _msg;
      this.data = _data;
      this.name = "InvalidArgumentException";
      console.log(this.name+":"+this.msg+"|"+this.data);
    }
  },

  CONST : {   /* SYSTEM CONSTANTS */
    A4 : 440,
    C0 : (function(){ return this.A4*Math.pow(2, -4.75); })(),
    notes : ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],
    notes2 : [
      { 'name':'C',  'id':'C',  off:0,   idx:0 },
      { 'name':'C#', 'id':'Cs', off:0.5, idx:1 },
      { 'name':'D',  'id':'D',  off:1,   idx:2 },
      { 'name':'D#', 'id':'Ds', off:1.5, idx:3 },
      { 'name':'E',  'id':'E',  off:2,   idx:4 },
      { 'name':'F',  'id':'F',  off:3,   idx:5 },
      { 'name':'F#', 'id':'Fs', off:3.5, idx:6 },
      { 'name':'G',  'id':'G',  off:4,   idx:7 },
      { 'name':'G#', 'id':'Gs', off:4.5, idx:8 },
      { 'name':'A',  'id':'A',  off:5,   idx:9 },
      { 'name':'A#', 'id':'As', off:5.5, idx:10 },
      { 'name':'B',  'id':'B',  off:6,   idx:11 }
    ],
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

  ENUM : {    /* ENUMERATED TYPES */
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

  PARAMS : {    /* APPLICATOIN PARAMETERS & DEFAULTS */
    AUDIO : {
      volume : null,
      file : 'ax/Sordid.mp3',
    },
    CAM : {
      args : {      // TODO group CAMERA.args even further if necessary.
        fov : 60.0,   // Field of view
        awf : 0.9,    // Aspect Width Factor
        near : 0.1,
        far : 2000.0,
        initPos : {
          x : -20,
          y : 8,
          z : 15
        },
        initView : {
          x : 0.0,
          y : 0.0,
          z : 0.0
        }
      },
      fraPerSec : 60.0
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
      osc : {
        dampFact : 0.15,       // Gamma, the damping coefficient
        amp : 1.0,        // Amplitude, initially
        freq : 8.0,       // Omega, the angular frequency
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
    LIGHT : {
      type : 'spot',
      colour : 0xFFFFFF,
      pos : {
        x : -40,
        y : 60,
        z : -10
      }
    },
    PIANO : {
      wd : 60.0,
      ht : 5,
      whtHt : 5.0,
      blkWd : null,
      blkHt : null,
      ctrlHt : null,
      blkKeyDownColour : '#B30B0B',
      blkKeyHoverColour : null,
      whtKeyDownColour : null,
      whtKeyHoverColour : null
    },
    BACKGROUND : {
      colour : 0xEEEEEE
    },
    lockParams : function(){
      Object.freeze(this.AUDIO);
      Object.freeze(this.CAM);
      Object.freeze(this.CAM.args);
      // Object.freeze(this.CAM.args.initPos);
      // Object.freeze(this.CAM.args.initView);
      Object.freeze(this.CUBE);
      // Object.freeze(this.CUBE.orbit);
      Object.freeze(this.GRID);
      Object.freeze(this.LIGHT);
      Object.freeze(this.BACKGROUND);
    }
  },

  UTILS : {   /* UTILITY FUNCTIONS */
    ACTION : {
      playFile : function(file){
        let path = URL.createObjectURL(file);
        $('#nowPlaying').attr('src', path);
        var result;
        try {
          document.getElementById('nowPlaying').play();
          return true;
        } catch (e if e instanceof NotSupportedError) {
          alert('File format not supported or possibly corrupted: ' + e);
        } catch (e if e instanceof NotAllowedError) {
          alert('NotAllowedError: ' + e);
        } catch (e) {
          alert('Unknown error type: ' + e);
        }
        return false;
      }
    },
    CONVERT : {
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
      colourD2H : function(colDec){
        // console.log('Decimal to Hex');
        // TODO refactor - cut out the string part..
        // Extract components..
        let rDec = colDec.r,
            gDec = colDec.g,
            bDec = colDec.b;
        // Convert to strings..
        let rHexStr = (+rDec).toString(16).toUpperCase(),
            gHexStr = (+gDec).toString(16).toUpperCase(),
            bHexStr = (+bDec).toString(16).toUpperCase();
        // Pad with zeroes..
        if ( rHexStr.length == 1 ) rHexStr = '0'+rHexStr;
        if ( gHexStr.length == 1 ) gHexStr = '0'+gHexStr;
        if ( bHexStr.length == 1 ) bHexStr = '0'+bHexStr;
        // Recombine..
        let colHexStr = rHexStr+gHexStr+gHexStr;
        // TODO remove test line..
        // console.log('colHexStr: ' + colHexStr);
        // Convert to number..
        // let colHexNum = parseInt(colHexStr, 16);
        let colHexNum = parseInt(colHexStr, 16);
        // TODO remove the following test line..
        // console.log('rgbHex: ' + colHexNum.toString(16));
        // console.log('rgbHex: ' + colHexNum);
        return eval('0x'+colHexNum.toString(16));
      },
      colourH2D : function(colHex){
        // console.log('Hex to Decimal');
        // TODO refactor - cut out the string part..
        // Convert to string..
        let colHexStr = colHex.toString(10);
        // TODO remove this test line..
        // console.log('colHexStr: ' + colHexStr);
        // Extract components..
        let rHexStr = colHexStr.substr(0,2),
            gHexStr = colHexStr.substr(2,2),
            bHexStr = colHexStr.substr(4,2);
        // TODO remove these test lines..
        // console.log('rHexStr: ' + rHexStr);
        // console.log('gHexStr: ' + gHexStr);
        // console.log('bHexStr: ' + bHexStr);
        // // Convert to decimal..
        let rDec = parseInt(rHexStr, 10),
            gDec = parseInt(gHexStr, 10),
            bDec = parseInt(bHexStr, 10);
        // Return it..
        return { r : rDec, g : gDec, b : bDec };
      }
    },
    FORMAT : {
      humanFileSize : function(bytes, si){
        var thresh = si ? 1000 : 1024;
        if ( bytes < thresh ) return bytes + ' B';
        var units = si ? ['kB','MB','GB','TB','PB','EB','ZB','YB'] : ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
        var u = -1;
        do {
          bytes /= thresh;
          ++u;
        } while  (bytes >= thresh );
        return bytes.toFixed(1)+' '+units[u];
      }
    },
    MODAL : {
      replace : function(elem) {
        $('#'+elem).removeClass('removed');
        $('#'+elem).addClass('replaced');
      },
      remove : function(elem) {
        $('#'+elem).removeClass('replaced');
        $('#'+elem).addClass('removed');
      },
      show : function(elem) {
        $('#'+elem).removeClass('hiding');
        $('#'+elem).addClass('showing');
      },
      hide : function(elem) {
        $('#'+elem).removeClass('showing');
        $('#'+elem).addClass('hiding');
      }
    },
    lockUtils : function(){
      Object.freeze(this.ACTION);
      Object.freeze(this.ACTION.playFile);
      Object.freeze(this.CONVERT);
      Object.freeze(this.CONVERT.freq2midi);
      Object.freeze(this.CONVERT.midi2octave);
      Object.freeze(this.CONVERT.midi2key);
      Object.freeze(this.CONVERT.midi2freq);
      Object.freeze(this.CONVERT.freq2note);
      Object.freeze(this.CONVERT.midi2note);
      Object.freeze(this.CONVERT.colourD2H);
      Object.freeze(this.CONVERT.colourH2D);
      Object.freeze(this.FORMAT);
      Object.freeze(this.FORMAT.humanFileSize);
      Object.freeze(this.MODAL);
      Object.freeze(this.MODAL.replace);
      Object.freeze(this.MODAL.remove);
      Object.freeze(this.MODAL.show);
      Object.freeze(this.MODAL.hide);
    }
  }
};



EQ.OBD = {  /* OBJECT DOMAIN DEFINITION */  };

/**
 * The Cell class is instantiated once for each cube, accounting for
 * its square in the grid.
 *
 * @param args {Object} Properties should include:
 *                      1. The location of the cell.
 *                      2. Cube parameters.
 *                      3. A 'pitch' object -> midi {int}
 *                                          -> octave {int}
 *                                          -> note {string}
 *                                          -> frequency {float}
 */
EQ.OBD.Cell = function(args){
  var pos = args.pos;
  var cube = args.cube;
  var pitch = args.pitch;

  var playing = false;
  var volume = 0.0;
  var motion = {
    orbiting : EQ.PARAMS.CUBE.motion.orbiting,
    rotating : EQ.PARAMS.CUBE.motion.rotating,
    jumping : EQ.PARAMS.CUBE.motion.jumping,
    DHMing : EQ.PARAMS.CUBE.motion.DHMing,
    SHMing : EQ.PARAMS.CUBE.motion.SHMing
  };

  var lastX = null;
  var lastY = null;
  var lastZ = null;
  var currX = (function(){ return null; })();
  var currY = (function(){ return null; })();
  var currZ = (function(){ return null; })();

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
    pos : function(){ return pos; },
    posX : function(){ return pos.x; },
    posY : function(){ return pos.y; },
    posZ : function(){ return pos.z; },
    rotate : function(args){
      cube.rotation.x += args.x;
      cube.rotation.y += args.y;
      cube.rotation.z += args.z;
    },
    scale : function(args){
      cube.scale.x = args.wd;
      cube.scale.y = args.ht;
      cube.scale.z = args.dp;
    },
    orbit : function(args){
      // TODO update orbit
    },

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
      return "pos{"+(pos.x)+","+(pos.y).toString()+","+(pos.z).toString()+"}";
    }
  };
};
EQ.OBD.Cell.prototype = {
  constructor : EQ.OBD.Cell//,
  // position : function(args){
  //   cube.position.x = args.x;
  //   cube.position.y = args.y;
  //   cube.position.z = args.z;
  // },
  // rotate : function(args){
  //   cube.rotation.x += args.x;
  //   cube.rotation.y += args.y;
  //   cube.rotation.z += args.z;
  // },
  // resize : function(args){
  //   cube.parameters.width = args.wd;
  //   cube.parameters.height = args.ht;
  //   cube.parameters.depth = args.dp;
  // }
};


EQ.OBD.Grid = (function(args){

  var spacing = EQ.PARAMS.GRID.spacing;
  var span = { x : EQ.CONST.octaves.length, z : EQ.CONST.notes.length };
  var xHi, xLo, zHi, zLo;
  var cells = [];
  var arrangement = EQ.ENUM.GRID_PATTERN.DIAG_GRAD;
  // buildCells(args);

  var midi = 0;
  xHi = (function(){ return (span.x-1)/2.0*spacing; }());
  xLo = (-1)*xHi;
  zHi = (function(){ return (span.z-1)/2.0*spacing; }());
  zLo = (-1)*zHi;


  // Iterate through the grid...
  for ( let zi=zLo ; zi<=zHi ; zi+=spacing ) {
    for ( let xi=xLo ; xi<=xHi ; xi+=spacing ) {

      var cube = new THREE.Mesh(args.geo,args.mat);
      let pos = {};

      // Add and position..
      args.scene.add(cube);
      cube.position.x = pos.x = xi;
      cube.position.y = pos.y = 0;
      cube.position.z = pos.z = zi;

      cells.push(new EQ.OBD.Cell({
        'pos' : pos,
        'cube' : cube,
        // 'pitch' : (function(){ return EQ.UTILS.midi2note(midi); })()
        'pitch' : (function(){ return EQ.UTILS.CONVERT.midi2note(midi); })
      }));
      midi++;
    }
  }
  delete midi;

  var getCells = function(){
    return cells;
  }
  var getCell = function(midiVal){
    if ( typeof midiVal == 'number' && midiVal >= 0 && midiVal < cells.length ) {
      return cells[midiVal];
    } else {
      return false;
    }
  }

  return {

    updateCells : function(args) {

      for ( let m = 0 ; m < cells.length ; m++ ) {

        // Rotation..
        (cells[m]).rotate(args.rotation);

        // Size..
        (cells[m]).scale(args.geometry);

        // Orbit radius...
        (cells[m]).orbit(args.orbit);
      }

    },

    toString : function() {
      console.log("Grid.toString()");
      console.dir(this);
    }
  }
});
