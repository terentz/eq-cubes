var oscList = [],
    kbBlkKeyDownColour = "#B30B0B",
    kbBlkKeyHoverColour = "#B30B0B",
    kbWhtKeyDownColour = "",
    kbMasterGainNode = kbAudioContext.createGain(),
    kbWavePicker,
    kbVolumeControl;

function drawKeyboard() {
  var inc,
      midi = 0,
      piaHt = 5,
      piaWd = 60.0,
      keyWd = piaWd / 77.0,
      blkHt = piaHt * 0.6,
      blkWd = keyWd * 0.8,
      ctrlsHt = 6,
      left = -(keyWd);

  // Set the piano's width, then add the keys..
  $('#keyboard').css({
                    width : vw(piaWd),
                    height : vw(piaHt)
                  });
  $('#keyboard-container').css({
                    height : vw(piaHt+ctrlsHt)
                  });
  $('#keyboard-controls').css({
                    height : vw(ctrlsHt)
                  });
  for ( let o in octaves ) {

    let octave = '' + octaves[o];
        // octave = '<div class=\'octave\' id=\''+octaveId+'\'></div>';
    // $('#piano').append(octave);

    for ( let n in notes ) {
      // ++noteCounter;

      // The html...
      let note = notes[n].id;
      let keyCol = ( note.length > 1 ) ? 'black' : 'white';
      let keyId = '' + note + octave;
      let freq = freqs[midi];
      let key = '<div id=\''+keyId+'\' class=\''+keyCol+'-key '+note+'\' data-midi=\''+midi+'\' data-freq=\''+freq+'\'></div>';

      $('#keyboard').append(key);

      let keyElement = document.getElementById(keyId);
      keyElement.dataset['octave'] = ''+octave;
      keyElement.dataset['note'] = note;
      keyElement.dataset['frequency'] = freq;
      keyElement.dataset['midi'] = midi;
      // The jQuery...
      // $('#'+keyId).
      // $('#'+keyId).click({ note: notes[n], 'freq': freq }, playNote);
      $('#'+keyId).mousedown({ colour: 'grey', 'freq': freq, note: notes[n].name }, keyPressed);
      $('#'+keyId).mouseup({ colour: keyCol }, keyReleased);
      // The css...
      switch(note) {
        // case 'Cs' || 'D' || 'Ds' || 'E' || 'Fs' || 'G' || 'Gs' || 'A' || 'As' || 'B':
        case 'Cs':
        case 'Ds':
        case 'Fs':
        case 'Gs':
        case 'As':
          inc = 0.6;
          break;
        case 'D':
        case 'E':
        case 'G':
        case 'A':
        case 'B':
          inc = 0.4;
          break;
        // case ('C' || 'F'):
        case 'C':
        case 'F':
          inc = 1;
          break;
        default:
          console.error('No switch result!');
      }

      left += (keyWd*inc);
      let vw = ''+left+'vw';
      $('#'+keyId).css({'left':vw,'top':'0'});

      ++midi;
      //left += ( () ?  :  );
    }
  }

  $('.black-key').css({
                    height : vw(blkHt),
                    width : vw(blkWd)
                  });
  $('.white-key').css({ width : vw(keyWd) });

}

function keyPressed(event) {
  if ( event.buttons & 1 ) {
    let dataset = event.target.dataset;
    console.log('clicked');
    console.dir(dataset);
    if ( !dataset['pressed'] ) {
      oscList[dataset['octave'][dataset['note']]] = playNote(event);
      dataset['pressed'] = 'yes';
    }
  }
  $('#'+event.target.id).css({ 'background-color': event.data.colour });
}
function keyReleased(event) {
  let dataset = event.target.dataset;

  if (dataset && dataset["pressed"]) {
    oscList[dataset["octave"][dataset["note"]]].stop();
    oscList[dataset["octave"][dataset["note"]]] = null;
    delete dataset["pressed"];
  }
  $('#'+event.target.id).css({ 'background-color': event.data.colour });
}

function playNote(event) {
  var target = event.target;
  console.log('target');
  console.dir(target);
  console.log('note');
  console.dir(event.data);

  let osc = kbAudioContext.createOscillator();
  let freq = event.target.dataset['freq'];
  console.log('freq: ' +freq);
  osc.connect(kbMasterGainNode);

  console.dir(kbWavePicker);

  let type = kbWavePicker.options[kbWavePicker.selectedIndex].value;
  console.dir(type);
  // console.dir(freq);
  osc.type = type;

  osc.frequency.value = freq;
  osc.start();

  return osc;
}

function toggleKeyColour(id, col) {
  var id = event.target.id;
  $('#'+id).css({ 'background-color': event.data.colour });
}

function changeVolume() {
  kbMasterGainNode.gain.value = kbVolumeControl.value;
}

function vw(num){
  return ''+num+'vw';
}





function initKeyboardAudio() {
  kbWavePicker = $('#kb-waveform-selector')[0];
  kbVolumeControl = $('#kb-volume-ctrl')[0];
  kbMasterGainNode.connect(kbAudioContext.destination);
  kbMasterGainNode.gain.value = kbVolumeControl.value;
}

function init() {
  drawKeyboard();
  initKeyboardAudio();
}
