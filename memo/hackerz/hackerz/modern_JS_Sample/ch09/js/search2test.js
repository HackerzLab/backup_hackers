window.onload = function() {
    'use strict';
   
		var search = window.location.search;
		/*
		search = search.slice(1);
		search = search.split('=');

		for(var i = 0; i<search.length; i++){
			console.log(search[i]);
		}
		*/
		search = search.slice(1);
		search = search.split('&');
		// console.log(search);	// ["s=10","np=7","sort=name"]
		for(var i = 0; i<search.length; i++){
			// console.log(search[i]);
			var string = search[i];
			var array = string.split('=');
			console.log(array[0]);
			console.log(array[1]);
		}

	
}





