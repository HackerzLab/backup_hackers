// eventtest5.js
function reportEvent(e) {
    'use strict';

    if (typeof e == 'undefined') e = window.event;

    // console.log(e.type);

    //console.log(e.type + ' : ' + e.which);
    //console.log(e.type + ' : ' + e.button);
    //console.log(e.type + ' : ' + e.relatedTarget);

    //console.log(e.type + ' : ' + e.clientX);
    //console.log(e.type + ' : ' + e.clientY);

    console.log(e.type + ' Shift: ' + e.shiftKey);
    console.log(e.type + ' Ctrl: ' + e.ctrlKey);
    console.log(e.type + ' Alt: ' + e.altKey);
}

window.onload = function() {
    'use strict';

     U.addEvent(U.$('button'), "mousedown", reportEvent);
     U.addEvent(U.$('button'), "mouseup", reportEvent);
     // U.addEvent(U.$('button'), "click", reportEvent);
     // U.addEvent(U.$('button'), "mouseout", reportEvent);

     // U.addEvent(document, "keydown", reportEvent);
     U.addEvent(document, "keypress", reportEvent);
};