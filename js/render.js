camera.position.z = EQ.DEF.CAM.pos.z;


var render = function(){
    requestAnimationFrame(render);

    // Rotate the cube..
    rotateCube(EQ.DEF.CUBE.rotation);

    // Give the cube an orbit..
    constantOrbit(EQ.DEF.CUBE.orbit.size, EQ.DEF.CUBE.orbit.speed);

    // Give the cube a damped oscillation..
    // if ( time > 0.0 && flags.oscPrevYPos !== flags.oscCurrYPos ) {
    //   // console.log('calculating..');
    //   var newPos = dampedHarmonicOscillator(params.osc.amp, params.osc.damp, params.osc.freq, params.osc.phase, time);
    //   cube.position.y = newPos;
    //   flags.oscPrevYPos = flags.oscCurrYPos;
    //   flags.oscCurrYPos = newPos;
    // }


    // Frame updates..
    time += ( 1.0 / EQ.DEF.CAM.framesPerSecond );
    // Next frame..
    renderer.render(scene,camera);
};
render();
