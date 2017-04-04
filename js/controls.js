
// Slider params..
var sliders = {
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
  orbitSpeed: {
    min: 0.1,
    max: 40.0,
    step: 0.1,
    val: 8.0
  }
};

// Slider params and event handler attachments..
// Amplitude..
$('#amp').attr({ min: sliders.amp.min, max: sliders.amp.max, step: sliders.amp.step, value: sliders.amp.val });
$('#amp-val-disp').text(sliders.amp.val);
// $('#amp-val-disp').text(sliders.amp.val);
$('#amp').change(adjustParamValue);
// Damping coefficient..
$('#damp').attr({ min: sliders.damp.min, max: sliders.damp.max, step: sliders.damp.step, value: sliders.damp.val });
$('#damp-val-disp').text(sliders.damp.val);
$('#damp').change(adjustParamValue);
// Frequency..
$('#freq').attr({ min: sliders.freq.min, max: sliders.freq.max, step: sliders.freq.step, value: sliders.freq.val });
$('#freq-val-disp').text(sliders.freq.val);
$('#freq').change(adjustParamValue);

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
