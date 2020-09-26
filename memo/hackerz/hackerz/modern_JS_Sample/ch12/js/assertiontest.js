function assert(expression, message) { 
	// console.log(expression);
	if (!expression) throw {name: 'Assertion Exception', message: message};

}


// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';
    
    document.getElementById('testbutton').onclick = function(){

		//assert(typeof myVar != 'undefined', 'myVarは未定義！');

    	var radius = 'a';
    	
    	try {
			assert((typeof radius == 'number'), 'radiusは数値でなくてはなりません。');
		} catch (ex) {
			console.log(ex.message);
		}
		
		/*
		var volume = (4/3) * Math.PI * Math.pow(radius, 3);
		// console.log(volume);
		try {
			assert((!isNaN(volume)), 'volumeは数値ではありません。');
		} catch (ex){
			console.log(ex.message);
		}
		*/
    }

};