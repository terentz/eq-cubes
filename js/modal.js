
/* TODO add these to EQ.UTILS */




/* TODO add this to the controls */
// var gui = new dat.GUI();
// var audioCtrl = {
//   changeAudio:function(){
//     console.log("clicked");
//     show('modal');
//   }
// };

// var modal = (function(){
//   var
//   method = {},
//   $overlay,
//   $modal,
//   $content,
//   $close;
//
//   /* Center the modal in the viewport */
//   method.centre = function () {
//     var top, left;
//     top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
//     left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;
//
//     $modal.css({
//       top: top+$(window).scrollTop(),
//       left: left+$(window).scrollLeft()
//     });
//   };
//
//   /* Open the modal */
//   method.open = function (settings) {
//     $content.empty().append(settings.content);
//     $modal.css({
//       width: settings.width || 'auto',
//       height: settings.height || 'auto'
//     });
//     method.centre();
//     $(window).bind('resize.modal', method.centre);
//     $modal.show();
//     $overlay.show();
//   };
//
//   /* Close the modal */
//   method.close = function () {
//     $modal.hide();
//     $overlay.hide();
//     $content.empty();
//     $(window).unbind('resize.modal');
//   };
//
//   /* Generate the html and add it to the document */
//
//
//   return method;
// }());

/* Script for file upload management */
// 'use strict';
//
// ;( function ( document, window, index ) {
// 	var inputs = document.querySelectorAll ( '#fileSelectInput' );
// 	Array.prototype.forEach.call ( inputs, function( input ) {
// 		var label	 = input.nextElementSibling,
// 			  labelVal = label.innerHTML;
//     input.addEventListener ( 'change', function( e ) {
// 			var fileName = '';
//       if ( this.files && this.files.length == 1) {
//         fileName = e.target.value.split('\\').pop();
//         console.log('fileName:'+fileName);
//         if ( fileName ) {
//           label.querySelector('span').innerHTML = fileName;
//         }
//         else {
//           label.innerHTML = labelVal;
//         }
//         show('playBtn'); // TODO should be in one of the above conditionals!!!
//       }
//       else{
//         console.log('stuck in that "else"!');
//       }
// 		});
//
// 		// Firefox bug fix
// 		input.addEventListener( 'focus', function(){
//       input.classList.add( 'has-focus' );
//     });
// 		input.addEventListener( 'blur', function(){
//       input.classList.remove( 'has-focus' );
//     });
// 	});
// }( document, window, 0 ));
//
//
// (function(){
//
// }());

// 'use strict';


// $('#axFileInput').on( 'click', alert('clicked'));

function initAxFileForm() {
  $('#axFileInput').on( 'change', function(event) {
    if ( this.files && this.files.length > 0 ) {
      // Show play button..

      // Load file into play function..
      EQ.UTILS.ACTION.playFile(this.files[0]);
    }
    // alert('in event handler!');
    //
    // console.log('test');
    // console.log(event);
    // console.log(this[0]);
  //   // var files = this[0].files;
  //   // console.dir(files);
  //   // console.log('test');
  //   // console.dir(temp);
  //   // console.log(temp);
  //   // var fileNameVal = $('#fileSelectInput').val();
  //   // console.log('#fileSelectInput:'+fileNameVal);
  //   // console.log('play button clicked');
  //   // if ( fileNameVal ) {
  //   //   $('#filename').val(fileNameVal.split('\\').pop());
  //   //   // $('#filename+label').text('selected');
  //   //   $('#filename+label').val('selected');
  //   //   show('playBtn');
  //   // }
  });

}





// After correct file selection
$('#playBtn').on('click', (function(){
  if ( $('#playBtn').hasClass('showing') ) {
    var fileNameVal = $('#axFileInput').val();
    if ( fileNameVal ) {
      $('#filename').val(fileNameVal);
      $('#filename+label').val('selected');
    }
    hide('playBtn');
    hide('axFileForm');
  }
}));
