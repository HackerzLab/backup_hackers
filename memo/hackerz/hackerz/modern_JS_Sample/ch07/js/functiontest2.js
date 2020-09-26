// ページのロード時に呼び出される関数。
function init() {
    'use strict';

    var res1 = functionName(true);
    console.log(res1);
    var res2 = functionName(false);
    console.log(res2);
    var msg = 'これ、' + functionName2() + 'あれ';
    console.log(msg);

    var myList = functionName3();
    for(var i=0, count=myList.length; i < count; i++){
        console.log(myList[i]);
    }
    
    var myObj = functionName4();
    console.log(myObj.x);
    console.log(myObj.y);


} // init()関数の終わり

function functionName(trueOrFalse){
    if(trueOrFalse){
        return 'TRUE';
    }else{
        return 'FALSE';
    }
}

function functionName2(){
    return 'それ、';
}

function functionName3() {
    return [1, 2, 3];
}

function functionName4() {
    return {x:1, y:2};
}


// 初期設定
window.onload = init;