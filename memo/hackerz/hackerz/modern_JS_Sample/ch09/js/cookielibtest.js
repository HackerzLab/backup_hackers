


// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';
    var expire = new Date();
    expire.setDate(expire.getDate() + 7);
    COOKIE.setCookie('c1', '123 4', expire);
    COOKIE.setCookie('c2', 'あabc', expire);

    var  c1= COOKIE.getCookie('c1');
    console.log("getCookie('c1')の結果 :" + c1);
    var  c2= COOKIE.getCookie('c2');
    console.log("getCookie('c2')の結果 :" + c2);


	
}; // onload関数の終わり