
// Slider params..
var controls = {
  sliders: {
    amp: {
      min: 0.1,
      max: 2.0,
      step: 0.01,
      val: 1.0
    },
    damp: {
      min: 0.0,
      max: 10.0,
      step: 0.01,
      val: 0.15
    },
    freq: {
      min: 0.2,
      max: 16.0,
      step: 0.1,
      val: 8.0
    },
    orbSpd: {
      min: 0.1,
      max: 40.0,
      step: 0.1,
      val: 8.0
    }
  }
};


/***********
 * SLIDERS *
 ***********/

/* Oscillation amplitude slider */
$('#amp').attr({ min: controls.sliders.amp.min,
                  max: controls.sliders.amp.max,
                  step: controls.sliders.amp.step,
                  value: controls.sliders.amp.val
                });
$('#amp-val-disp').text(controls.sliders.amp.val);
$('#amp').change(adjustParamValue);

/* Oscillation damping coefficient slider */
$('#damp').attr({ min: controls.sliders.damp.min,
                  max: controls.sliders.damp.max,
                  step: controls.sliders.damp.step,
                  value: controls.sliders.damp.val
                });
$('#damp-val-disp').text(controls.sliders.damp.val);
$('#damp').change(adjustParamValue);

/* Oscillation frequency slider */
$('#freq').attr({ min: controls.sliders.freq.min,
                  max: controls.sliders.freq.max,
                  step: controls.sliders.freq.step,
                  value: controls.sliders.freq.val
                });
$('#freq-val-disp').text(controls.sliders.freq.val);
$('#freq').change(adjustParamValue);

/* Orbit speed slider */
$('#orbSpd').attr({ min: controls.sliders.orbSpd.min,
                  max: controls.sliders.orbSpd.min,
                  step: controls.sliders.orbSpd.step,
                  value: controls.sliders.orbSpd.val
                });
$('#orbSpd-val-disp')

// Event handler for sliders..
function adjustParamValue(event){
  // get the goods..
  var id = event.target.id;
  var val = $('#'+id).val();
  // log 'em..
  console.log("id:"+id+" | val:"+val);
  // assign value..
  params.osc[id] = val;
  $('#'+id+'-val-disp').text(val);
}
