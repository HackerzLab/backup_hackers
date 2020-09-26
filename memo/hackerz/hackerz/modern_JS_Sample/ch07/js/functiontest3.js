// ページのロード時に呼び出される関数。
function init() {
    'use strict';

    (function() {
        var someVar = 'a';
        console.log('即時実行関数の実行');
        console.log(someVar);
    })();

    console.log('init関数の実行');
    // someVarは即時実行関数のローカル変数なので、ここでは参照できない
    // console.log(someVar); 

    // 階乗を計算する関数
    function factorial(n) {
    	if(n<=1){
    		return 1;
    	} else {
    		return n * factorial(n-1);
    	}
    }
    var res1 = factorial(5);
    console.log(res1);

    // 階乗を計算する関数のループ版
    function factorial2(n) {
    	for(var product = 1; n > 1; n--){
    		product *= n;
    	}
    	return product;
    }
    var res2 = factorial2(5);
    console.log(res2);
    


} // init()関数の終わり




// 初期設定
window.onload = init;