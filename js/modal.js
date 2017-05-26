

// 
// function initAxFileForm() {
//   var success = false;
//   $('#axFileInput').on( 'change', function(event) {
//     if ( this.files && this.files.length > 0 && /audio\/\w+/.test(this.files[0].type) ) {
//       console.log('files test: passed');
//       var file = this.files[0];
//       var filename = file.name;
//       // Load file into play readiness..
//       console.dir('file');
//       console.dir(file);
//       console.log('filename');
//       console.log(filename);
//       EQ.UTILS.ACTION.playFile(file);
//       controls.nowPlaying = filename;
//     } else {
//       console.log('file not loaded');
//     }
//   });
// }





// // After correct file selection
// $('#playBtn').on('click', (function(){
//   if ( $('#playBtn').hasClass('showing') ) {
//     var fileNameVal = $('#axFileInput').val();
//     if ( fileNameVal ) {
//       $('#filename').val(fileNameVal);
//       $('#filename+label').val('selected');
//     }
//     hide('playBtn');
//     hide('axFileForm');
//   }
// }));
