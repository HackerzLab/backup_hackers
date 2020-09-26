function showHideVisibility(e) {
	var text1 = document.getElementById('text1');
	console.log(text1.style.visibility);
	
	if(text1.style.visibility == 'hidden'){
		text1.style.visibility = 'visible';
	}else{
		text1.style.visibility = 'hidden';
	}
}

function showHideDisplay() {
	var text2 = document.getElementById('text2');
	console.log(text2.style.display);
	if(text2.style.display == 'none'){
		text2.style.display = 'block';
	}else{
		text2.style.display = 'none';
	}
	
}


// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';
    
    var button1 = document.getElementById('button1');
	var text1 = document.getElementById('text1');
	text1.style.visibility = 'hidden';
    button1.onclick = function() {
    	showHideVisibility();
    }

    var button2 = document.getElementById('button2');
	var text2 = document.getElementById('text2');
	text2.style.display = 'block';
    button2.onclick = function() {
    	showHideDisplay();
    }

}; // onload関数の終わり