// eventtest3.js

function formAction(e) {
    'use strict';
    console.log(e.type);
    console.log(e.target.id);
    
    
} // limitText()関数の終わり

// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';
    //U.addEvent(U.$('theForm'), 'change', formAction);

    U.addEvent(U.$('tarea'), 'change', formAction);
    U.addEvent(U.$('tarea'), 'select', formAction);
    U.addEvent(U.$('tinput'), 'change', formAction);
    U.addEvent(U.$('tinput'), 'select', formAction);

    U.addEvent(U.$('checkbox'), 'change', formAction);
    U.addEvent(U.$('checkbox'), 'click', formAction);
    U.addEvent(U.$('radio'), 'change', formAction);
    U.addEvent(U.$('radio'), 'click', formAction);

    U.addEvent(U.$('anchor'), 'focus', formAction);
    U.addEvent(U.$('anchor'), 'blur', formAction);


};