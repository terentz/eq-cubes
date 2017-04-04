

/* SYSTEM CONSTANTS */

var sin = Math.sin,
  exp = Math.exp,
  floor = Math.floor,
  pi = Math.PI;


/* SYSTEM PARAMETERS */

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
      z: 0
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
