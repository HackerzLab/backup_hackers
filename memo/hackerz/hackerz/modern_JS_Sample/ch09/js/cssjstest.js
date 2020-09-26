// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';
    
    var elem = document.getElementById('text2');
    console.log(elem.style);
    console.log(elem.style.fontSize);
    elem.style.fontSize = '14px';

    var elementStyle = window.getComputedStyle(elem);
    console.log(elementStyle['display']);
    console.log(elementStyle.display);

}; // onload関数の終わり