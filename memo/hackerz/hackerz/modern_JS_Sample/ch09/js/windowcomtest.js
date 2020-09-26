var windowB;

var windowAVal = 'WindowA';

function popup() {
  
  windowB = window.open('windowB.html','WindowB');
  U.addEvent(U.$('callbbutton'), 'click', callB);

}

function callB(){
  console.log('callB');
  //console.log('something : ' + windowB.window.something);

  windowB.window.addToSomething(12);
  var thing = U.$('someElement').value;
  windowB.window.useFormData(thing);
}

// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';
    U.addEvent(U.$('popupbutton'), 'click', popup);
}

