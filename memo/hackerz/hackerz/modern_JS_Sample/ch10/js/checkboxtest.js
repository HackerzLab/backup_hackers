



// ウィンドウのロード時、機能性を確率
window.onload = function() {
    'use strict';
    
    var checkbox = document.getElementById('checkbox1');
    var which = checkbox.checked;

    console.log(which);
    checkbox.checked = 'checked';
    console.log(checkbox.checked);

    which = checkbox.checked;
    if(which){
    	console.log('選択されている');
    	var value = checkbox.value;
    	console.log(value);
    }

    var termsBox = document.getElementById('termscheckbox');
    var submit = document.getElementById('submit');

    submit.disabled = true;
    termsBox.onclick = function(){
    	submit.disabled = false;
    }
    
    
};