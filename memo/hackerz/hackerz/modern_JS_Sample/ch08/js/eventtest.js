// eventtest.js

// ページのロード時に呼び出される関数。
function init() {
    'use strict';
   console.log('init関数が呼ばれた');
}

if(window.addEventListener){
    window.addEventListener('load', init, false);
    console.log('W3C');
} else if(window.attachEvent) {
    window.attachEvent('onload', init);
    console.log('古いIE');
}