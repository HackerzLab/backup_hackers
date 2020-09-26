


// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';
    document.cookie = 'fontSize=14';
    document.cookie = 'color=3C9';

    //console.log(document.cookie);
    //console.log(window.navigator.cookieEnabled);

    var cookies = document.cookie.split(';');
    // console.log(cookies);
    for(var i=0, count=cookies.length; i<count; i++){
      console.log(cookies[i]);
    }


	
}; // onload関数の終わり