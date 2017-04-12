var notesArr =  [ { oct: -1, loHz: 7.9, hiHz: 15.9 },
                  { oct: 0, loHz:}]

eq.freq2noteName = function(freq){
  var h = Math.round(12*Math.log2(freq/eq.C0));
  var octave = Math.floor(h/12);
  var n = h%12
  return eq.names[n]+octave.toString();
};

eq.note2parts = function(note){
  
};





var octaves = {

}
