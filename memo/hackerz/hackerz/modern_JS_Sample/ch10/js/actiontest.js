
function onsubmit(e){
	console.log("送信イベント");
}


// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';
    console.log("JavaScript有効");
    document.getElementById('theForm').action = 'otherpage.php';
    document.getElementById('info').value = 'JavaScript有効';
    document.getElementById('theForm').onsubmit = onsubmit;
};