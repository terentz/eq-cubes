

EQ.RUN = {

  renderScene : function() {

    stats.update();
    updateScene();


    requestAnimationFrame(renderScene);

    time += ( 1.0 / frameRate );
    renderer.render(scene, camera);
  },

  updateScene : function() {
    grid.updateCells(rotTuple);
  }
};



/* RENDERING */
//
//
// // TODO: remove test line..
// console.log('rotTuple');
//
// for (var prop in grid) {
//     if (grid.hasOwnProperty(prop)) {
//         console.log('grid.'+prop+'={'+grid[prop]+'}');
//     }
// }
// var render = function(){
//     requestAnimationFrame(render);
//
//     /* UPDATE DRAWING HERE */
//     // grid.prototype.test();
//     grid.updateCells(rotTuple);
//
//     /* UPDATE FLAGS HERE */
//     time += ( 1.0 / frameRate );
//
//     // Go again!
//     renderer.render(scene,camera);
// };
// render();
