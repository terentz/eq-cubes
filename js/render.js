/* RENDERING */

var render = function(){
    requestAnimationFrame(render);
    time += ( 1.0 / frameRate );

    renderer.render(scene,camera);
};
render();
