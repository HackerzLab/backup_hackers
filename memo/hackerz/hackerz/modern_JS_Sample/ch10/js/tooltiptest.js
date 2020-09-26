

// ウィンドウのロード時、機能性を確率
window.onload = function() {
    'use strict';
    
	U.enableTooltips('username');

	document.getElementById('submitButton').disabled = true;
	// document.getElementById('submitButton').disabled = 'disabled';
	// document.getElementById('submitButton').disabled = 'a';
	// document.getElementById('submitButton').disabled = 0;
	console.log(document.getElementById('submitButton').disabled);
    
};