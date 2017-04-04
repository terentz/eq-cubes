

// Damped Oscillator
function dampedOscillator(a, d, f, p, t){
  return a * exp(-d * t) * sin((f * pi * t) - p);
}
