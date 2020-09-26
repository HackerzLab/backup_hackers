// eventtest5.js
function reportEvent(e) {
    'use strict';

    if (typeof e == 'undefined') e = window.event;

    console.log(e.type);
    // console.log(e.target);
   // console.log(e.eventPhase);
   // console.log(e.bubbles);

}

window.onload = function() {
    'use strict';

     U.addEvent(U.$('link'), "mouseover", reportEvent);
    //  U.addEvent(U.$('mydiv'), "mouseover", reportEvent);
    //U.addEvent(document, "mouseover", reportEvent);
};