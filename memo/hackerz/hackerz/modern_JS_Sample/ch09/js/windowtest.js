// windowtest.js

function getWindowData() {
  // Chrome, Firefox, Safari
  //console.log('screenX : ' + window.screenX);
  //console.log('screenY : ' + window.screenY);
  
  // Chrome, Opera, Safari,IE
  //console.log('screenLeft : ' + window.screenLeft);
  //console.log('screenTop : ' + window.screenTop);

  //console.log('innerHeight : ' + window.innerHeight);
  //console.log('innerWidth : ' + window.innerWidth);

  //console.log('outerHeight : ' + window.outerHeight);
  //console.log('outerWidth : ' + window.outerWidth);

  //console.log('clientHeight : ' + document.body.clientHeight);
  //console.log('clientWidth : ' + document.body.clientWidth);


  var child = window.open('childwindow.html','Child','height=200, width=300');

}

// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';
    U.addEvent(U.$('getbutton'), 'click', getWindowData);
}

