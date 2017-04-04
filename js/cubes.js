var notesArr =  [ { oct: -1, loHz: 7.9, hiHz: 15.9 },
                  { oct: 0, loHz:}]


function identifyOctave(freq){
  if (freq < 7.9) {
    console.log('Frequency too low!');
    return null;
  } elseif (freq < 8.42) return { oct: -1, midi: 0, name: "C(-1)" };
  elseif (freq < 8.91) return { oct: -1, midi: 1, name: "C#(-1)" };
  elseif
  }
}

var octaves = {

}
