// objecttest2.js

function click() {
    'use strict';

    var chapter = {
      num:6
    };
    var prop = 'title';
    chapter[prop] = '複雑な変数型';
    console.log(chapter[prop]); 
    console.log(chapter.prop); 
    // 送信を回避するためにfalseを返す
    return false;
    
} 

// 初期設定
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = click;

} // init()関数の終わり
window.onload = init;