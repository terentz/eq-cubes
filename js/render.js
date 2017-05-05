
/* RENDERING */

var rotTuple = { x : EQ.DEFS.CUBE.rotation,
              y : EQ.DEFS.CUBE.rotation,
              z : 0 };

// TODO: remove test line..
console.log('rotTuple');

for (var prop in grid) {
    if (grid.hasOwnProperty(prop)) {
        console.log('grid.'+prop+'={'+grid[prop]+'}');
    }
}
var render = function(){
    requestAnimationFrame(render);

    /* UPDATE DRAWING HERE */
    // grid.prototype.test();
    grid.rotateAll(rotTuple);

    /* UPDATE FLAGS HERE */
    time += ( 1.0 / frameRate );

    // Go again!
    renderer.render(scene,camera);
};
render();
