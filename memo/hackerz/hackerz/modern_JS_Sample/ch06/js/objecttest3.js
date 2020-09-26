// objecttest3.js

// ページのロード時に呼び出される関数。
function init() {
    'use strict';

    
    var chapter = {
      num:6,
      title:'複雑な変数型'
    };

    
    for (var p in chapter){
      console.log(p + ' = ' + chapter[p] + '\n');
    }

    chapter.functionA = function() {
      console.log('functionA');
    }

    for (var p in chapter){
      if(typeof chapter[p] == 'function'){
        console.log(p + 'は関数' + '\n');
      }else{
        console.log(p + 'は変数' + '\n');
      }
    }
    //chapter.functionA();

} // init()関数の終わり



// 初期設定
window.onload = init;