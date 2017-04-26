
/* RENDERING */

var rotTuple = { x : EQ.DEFS.CUBE.rotation,
              y : EQ.DEFS.CUBE.rotation,
              z : 0 };

// TODO: remove test line..
console.log('rotTuple');


var render = function(){
    requestAnimationFrame(render);

    /* UPDATE DRAWING HERE */
    grid.rotateAll(rotTuple);
    grid.test();

    /* UPDATE FLAGS HERE */
    time += ( 1.0 / frameRate );

    // Go again!
    renderer.render(scene,camera);
};
render();
