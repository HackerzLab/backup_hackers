function $(id) {
	'use strict';
	if (typeof id != 'undefined') {
		return document.getElementById(id);
	} else {
		throw Error('この関数には引数が１つ必要です。');
	}
}


function doTest(){
	'use strict';
	/*
	try{
		document.getElementById('testbutton').submit();
		
	} catch(ex){
		console.log(ex.name);
		console.log(ex.message);
	} finally {

	}
	*/

	/*
	try{
		document.getElementById('testbutton').submit();
	}finally{
		console.log("finally");
	}
	*/

	try {
		var elem = $();
		elem.innerHTML = '<p>blah</p>';
	} catch (ex) {
		console.log('要素を更新できませんでした。その理由： ' + ex.message + '\n');
	}
}


// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';
    document.getElementById('testbutton').onclick = doTest;

};