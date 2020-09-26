// datemethos.js

// ページのロード時に呼び出される関数。
function init() {
    'use strict';
    //oops();
    // oooops();
    
    // reportStatus('この作業を終えた');
    // reportStatus('別の作業を終えた');

    var chapter = {
        num:6,
        title: '複雑な変数型'
    };

    // displayObject(chapter);

    //add(2, 2);
    //add('Hello', 'World');

    // functionName(1, 2, 3);
    // functionName('A', 'B');
    showText({text:'Hello, World!', bold:true, size:12});


} // init()関数の終わり

function showText(argObject){
    console.log(argObject.text);
    console.log(argObject.bold);
    console.log(argObject.size);
}

function functionName(someVar, anotherVar, yetAnotherVar){
    if(arguments.length ==  3){
        console.log("引数は３つ");
    } else {
        console.log("引数は３つでない");
    }

    for(var i = 0, count = arguments.length; i < count; i++){
        console.log(arguments[i]);
    }
}

function add(x, y) {
    var total = x + y;
    console.log(total);
}

function reportStatus(message) {
    console.log('今の段階：' + message + '\n');
}

function displayObject(obj) {
    for(var p in obj) {
        console.log(p + ' = ' + obj[p] + '\n');
    }
}

function oops() {
    console.log('oops');
}

// 初期設定
window.onload = init;