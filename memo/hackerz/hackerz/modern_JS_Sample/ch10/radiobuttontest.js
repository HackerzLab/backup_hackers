// ウィンドウのロード時、機能性を確率
window.onload = function() {
    'use strict';
    
    var radios = document.getElementsByName('gender');
    // console.log(radios);
    for (var i = 0, count = radios.length; i < count; i++) {
      //  console.log(radios[i]);
    }
    
    document.getElementById('submit').onclick=function(){
        var radios = document.getElementsByName('gender');
        var selected = null;
        for (var i = 0, count = radios.length; i < count; i++) {
            if (radios[i].checked) {
                selected = radios[i].value;
                break;
            }
        }
        console.log(selected);
        return false;
    };
    
};