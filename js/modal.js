
/* TODO add these to EQ.UTILS */
function replace(elem) {
  $('#'+elem).removeClass('remove');
  $('#'+elem).addClass('replace');
}
function remove(elem) {
  $('#'+elem).removeClass('replace');
  $('#'+elem).addClass('remove');
}
function show(elem) {
  $('#'+elem).removeClass('hide');
  $('#'+elem).addClass('show');
}
function hide(elem) {
  $('#'+elem).removeClass('show');
  $('#'+elem).addClass('hide');
}


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











$('#fileSelectInput').change( function() {
  console.dir(this.files);
  var fileNameVal = $('#fileSelectInput').val();
  console.log('#fileSelectInput:'+fileNameVal);
  console.log('play button clicked');
  if ( fileNameVal ) {
    $('#filename').val(fileNameVal.split('\\').pop());
    // $('#filename+label').text('selected');
    $('#filename+label').val('selected');
    show('playBtn');
  }
});

// After correct file selection
$('#playBtn').on('click', (function(){
  if ( $('#playBtn').hasClass('show') ) {
    var fileNameVal = $('#fileSelectInput').val();
    if ( fileNameVal ) {
      $('#filename').val(fileNameVal);
      $('#filename+label').val('selected');
    }
    hide('playBtn');
    hide('axFileForm');
  }
}));
