

/* System namespace */
var eq = {
  A4 : 440,
  C0 : eq.A4*Math.pow(2, -4.75),
  names : ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],
  allFreqs : [8.176, 8.662, 9.177, 9.723, 10.301, 10.914, 11.563, 12.250, 12.979, 13.750, 14.568, 15.434,
              16.352, 17.324, 18.354, 19.445, 20.602, 21.827, 23.125, 24.500, 25.957, 57.500, 29.135, 30.868,
              32.703, 34.684, 36.708, 38.891, 41.203, 43.654, 46.249, 48.999, 51.913, 55.000, 58.270, 61.735,
              65.406, 69.296, 73.416, 77.782, 82.407, 87.307, 92.499, 97.999, 103.83, 110.00, 116.54, 123.47,
              130.81, 138.59, 146.83, 155.56, 164.81, 174.61, 185.00, 196.00, 207.65, 220.00, 233.08, 246.94,
              261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392.00, 415.30, 440.00, 466.16, 493.88,
              523.25, 554.37, 587.33, 622.25, 659.26, 698.46, 739.99, 783.99, 830.61, 880.00, 932.33, 987.77,
              1046.5, 1108.7, 1174.7, 1244.5, 1318.5, 1396.9, 1480.0, 1568.0, 1661.2, 1760.0, 1864.7, 1975.5,
              2093.0, 2217.5, 2349.3, 2489.0, 2637.0, 2793.8, 2960.0, 3136.0, 3322.4, 3520.0, 3729.3, 3951.1,
              4186.0, 4434.9, 4698.6, 4978.0, 5274.0, 5587.7, 5919.9, 6271.9, 6644.9, 7040.0, 7458.6, 7902.1,
              8372.0, 8869.8, 9397.3, 9956.1, 10548.1, 11175.3, 11839.8, 12543.9]

};

eq.freq2noteName = function(freq){
  var h = Math.round(12*Math.log2(freq/eq.C0));
  var octave = Math.floor(h/12);
  var n = h%12
  return eq.names[n]+octave.toString();
};
eq.grid = {};
eq.Note = function(freq)

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
eq.Cube = function(desc,,pos,sz,rSpd,oRad,oSpd){
  // Musical properties..
  var fullname = desc.oct.toString()+desc.name;
  var midi = desc.midi;
  var freq = desc.freq;
  var wavLen = desc.wavLen;
  var minFreq = desc.lo;
  var maxFreq = desc.hi;
  // Geometry/Phys..
  this.xPos = x;
  this.yPos = y;
  this.zPos = z;
  this.size = sz;
  this.rotation = rSpd;
  this.orbRad = oRad;
  this.speed = spd;
  // Sound & motion flags & param's..
  this.constOsc = false;
  this.dampedOsc = false;
  this.
  this.vol = 0;

};

eq.buildGrid = function(){

}();

eq.grid : {
  '-1': [
    {
      name : 'C-1',
      midi : 0,
      minFreq : ,
      actFreq : 8.176,
      maxFreq : ,
      wavLen :
    },
    {
      name : 'C#-1',
      midi : 1,
      minFreq : ,
      actFreq : 8.662,
      maxFreq : ,
      wavLen :
    },
    {
      name : 'D-1',
      midi : 2,
      minFreq : ,
      actFreq : 9.177,
      maxFreq : ,
      wavLen :
    },
    {
      name : 'D#-1',
      midi : 3,
      minFreq : ,
      actFreq : 9.723,
      maxFreq : ,
      wavLen :
    },
    {
      name : 'E-1',
      midi : 4,
      minFreq : ,
      actFreq : 10.301,
      maxFreq : ,
      wavLen :
    },
    {
      name : 'F-1',
      midi : 5,
      minFreq : ,
      actFreq : 10.914,
      maxFreq : ,
      wavLen :
    },
    {
      name : 'F#-1',
      midi : 6,
      minFreq : ,
      actFreq : 11.563,
      maxFreq : ,
      wavLen :
    },
    {
      name : 'G-1',
      midi : 7,
      minFreq : ,
      actFreq : 12.250,
      maxFreq : ,
      wavLen :
    },
    {
      name : 'G#-1',
      midi : 8,
      minFreq : ,
      actFreq : 12.979,
      maxFreq : ,
      wavLen :
    },
    {
      name : 'A-1',
      midi : 9,
      minFreq : ,
      actFreq : 13.750,
      maxFreq : ,
      wavLen :
    },
    {
      name : 'C-1',
      midi : 0,
      minFreq : ,
      actFreq : 8.176,
      maxFreq :
      wavLen :
    },
    {
      name : 'C-1',
      midi : 0,
      minFreq : ,
      actFreq : 8.176,
      maxFreq :
      wavLen :
    },
  ],
  '0': [

  ]
};

eq.Note : function() {

};

/* SYSTEM CONSTANTS */

var sin = Math.sin,
  exp = Math.exp,
  floor = Math.floor,
  pi = Math.PI;


/* SYSTEM PARAMETERS */

var note = {
  octave: ,
  noteName: ,
  noteIndex: ,
  frequency: ,
  wavelength: ,
  volumePrevFrame: ,
  valumeCurrFrame: ,
  oscillating: ,
  oscType: ,

  oscPrevYPos: ,
  oscCurrYPos: ,

};
// A battalion of dancing cubes..
var noteTable = [
  [

  ],
  [

  ],

];


// Frame flags..
var flags = {
  oscCurrYPos: 0.0,
  oscPrevYPos: -1.0
};

// Initialise time..
var time = 0.0;
// Incremental constant..
var frameRate = 60.0;

// Adjustable param's..
var params = {
  cube: {
    size: 1,
    rotation: 0.04
  },
  camera: {
    args: {
      fov: 60,
      aspectWidthFactor: 0.9,
      near: 0.1,
      far: 2000.0
    },
    pos: {
      x: 0,
      y: 0,
      z: 5
    }
  },
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
