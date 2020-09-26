// windowtest.js

function move() {

  // Firefox
  // window.screenX = 500;
  // window.outerHeight = 50;
  // window.innerHeight = 50;

  // window.moveTo(100, 200);
  // window.moveBy(25, 50);
  window.close();
 

}

// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';
    U.addEvent(U.$('movebutton'), 'click', move);
}

