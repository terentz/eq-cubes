
/* Regular oscillation */
function simpleHarmonicOscillator(a, f, p, t){
  return a * sin((f * pi * t) - p);
}

/* Damped oscillation */
function dampedHarmonicOscillator(a, d, f, p, t){
  return a * exp(-d * t) * sin((f * pi * t) - p);
}

/* Constant rotation */
function rotateCube(rot){
  cube.rotation.x += rot;
  cube.rotation.y += rot;
}

/* Constant orbit */
function constantOrbit(rad, spd){
  cube.position.x = Math.cos(time*spd) * rad;
  cube.position.z = Math.sin(time*spd) * rad;
}



// Spiral into centre..
