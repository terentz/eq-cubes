

/* System namespace */
var eq = {};

eq.octaves : {
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
