// eventtest4.js

function reportEvent(e) {
    'use strict';

    if (typeof e == 'undefined') e = window.event;
    var charCode = e.which || e.keyCode;
    console.log("charCode : " + charCode);
    var character = String.fromCharCode(charCode);
    console.log("character : " + character);

    var keycode = e.keyCode;
    console.log("keycode : " + keycode);
}

window.onload = function() {
    'use strict';
    U.addEvent(document, "keypress", reportEvent);
    U.addEvent(document, "keydown", reportEvent);

};