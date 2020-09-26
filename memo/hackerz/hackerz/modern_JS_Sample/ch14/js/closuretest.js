window.onload = function(){
    'use strict';
    
    var val1 = 'onloadの変数'
    console.log("onloadの実行");

    document.getElementById('theForm').onsubmit = function() {
    	// console.log(val1);
    	someFunction();
    	return false;

    	function someFunction() {
	
			var links = document.getElementsByTagName('a');
			for (var i = 0, count = links.length; i < count; i++) {
				links[i].onclick = function() {
				console.log(i);
				console.log(links[i]); // links[0]やlinks[1]ではアクセスできる
				return false;
			}	

		}

    }
}

}



