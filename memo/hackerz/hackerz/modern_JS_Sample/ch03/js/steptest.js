// ウィンドウがロードされたら呼び出される関数
function functionA() {
    'use strict';

    console.log('Aの1');
    console.log('Aの2');
    console.log('Bの呼び出し');
    functionB();
    console.log('Aの終わり');

} 

function functionB() {
    'use strict';

    console.log('Bの1');
    console.log('Bの終わり');

} 


// イベントリスナーをウィンドウのロードイベントに割り当てる
window.onload = functionA;
