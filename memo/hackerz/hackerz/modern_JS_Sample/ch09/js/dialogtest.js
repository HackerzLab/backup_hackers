// resetest.js

// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';
    U.addEvent(U.$('theForm'), 'reset', function(){
       //  return confirm('このメッセージを確認してください。');
       // return alert('[OK]ボタンがクリックできます');
       var response = prompt('どう思いますか？');
       //response = prompt('どう思いますか？', '...について');

    });
};

window.onunload = function() {
    'use strict';
       //  return confirm('このメッセージを確認してください。');
       // return alert('本当にこのページから離れますか？');
};