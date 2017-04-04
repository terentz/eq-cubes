
var render = function(){
    requestAnimationFrame(render);
    // Rotate the cube..
    cube.rotation.x += params.cube.rotation;
    cube.rotation.y += params.cube.rotation;
    // Give the cube an orbit..
    cube.position.x = Math.cos(time*params.orbit.speed) * params.orbit.size;
    cube.position.z = Math.sin(time*params.orbit.speed) * params.orbit.size;
    // Give the cube a damped oscillation..
    if ( time > 0.0 && flags.oscPrevYPos !== flags.oscCurrYPos ) {
      // console.log('calculating..');
      var newPos = dampedOscillator(params.osc.amp, params.osc.damp, params.osc.freq, params.osc.phase, time);
      cube.position.y = newPos;
      flags.oscPrevYPos = flags.oscCurrYPos;
      flags.oscCurrYPos = newPos;
    }


    time += ( 1.0 / frameRate );

    renderer.render(scene,camera);
};
render();
