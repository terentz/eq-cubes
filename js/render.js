
var render = function(){
    requestAnimationFrame(render);

    // Rotate the cube..
    rotateCube(params.cube.rotation);

    // Give the cube an orbit..
    constantOrbit(params.orbit.size, params.orbit.speed);

    // Give the cube a damped oscillation..
    if ( time > 0.0 && flags.oscPrevYPos !== flags.oscCurrYPos ) {
      // console.log('calculating..');
      var newPos = dampedHarmonicOscillator(params.osc.amp, params.osc.damp, params.osc.freq, params.osc.phase, time);
      cube.position.y = newPos;
      flags.oscPrevYPos = flags.oscCurrYPos;
      flags.oscCurrYPos = newPos;
    }


    // Frame updates..
    time += ( 1.0 / frameRate );
    // Next frame..
    renderer.render(scene,camera);
};
render();
