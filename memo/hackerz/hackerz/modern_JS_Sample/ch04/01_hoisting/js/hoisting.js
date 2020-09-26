// 関数の外で宣言したグローバル変数
var myVar = '関数外';
// 変数myVarを出力
console.log(myVar);

function init() {
    'use strict';
    console.log(myVar);
    // 関数内でmyVarを新たに宣言
    var myVar = '関数内';
    console.log(myVar);
} 
window.onload = init;
