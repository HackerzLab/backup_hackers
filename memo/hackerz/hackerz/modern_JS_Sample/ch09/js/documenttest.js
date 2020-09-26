// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';
    console.log(document.title);
    document.title = '新しいタイトル';
     console.log(document.title);

     console.log(document.compatMode);
}


