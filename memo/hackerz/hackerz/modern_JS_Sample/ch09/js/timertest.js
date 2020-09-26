

function startTimer(e){
    
    var interval = setInterval(doThis, 10000);

    var n =0;
    function doThis(){
        n++;
        alert('これは' + n + '回めのアラート。');
        
        if(n==5) clearInterval(interval);
        console.log(n);
    }
}

// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';

    document.getElementById('timerbutton').onclick = startTimer;

};