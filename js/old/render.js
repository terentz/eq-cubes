function renderScene() {
    stats.update();
    // rotate the cube around its axes
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
    cube.rotation.z += 0.02;

    // bounce the sphere up and down
    step += 0.04;
    sphere.position.x = 20 + ( 10 * (Math.cos(step)));
    sphere.position.y = 2 + ( 10 * Math.abs(Math.sin(step)));

    // render using requestAnimationFrame
    requestAnimationFrame(renderScene);
    renderer.render(scene, camera);
}
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
    grid.updateCells(rotTuple);

    /* UPDATE FLAGS HERE */
    time += ( 1.0 / frameRate );

    // Go again!
    renderer.render(scene,camera);
};
render();
