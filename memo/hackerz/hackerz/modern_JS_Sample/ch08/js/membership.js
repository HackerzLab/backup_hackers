// membership.js
// 入会費を計算するスクリプト

// フォームの送信時に呼び出される関数。
// 計算を実行し、ブラウザのデフォルトの振る舞いを回避する
function calculate(e) {
    
    'use strict';

    // イベントオブジェクトを取得
    if (typeof e == 'undefined') e = window.event;


    // 合計金額を保持する変数
    var cost;

    // フォーム要素への参照を取得
    var type = U.$('type');
    var years = U.$('years');
    
    // 年数を数値に変換
    if (years && years.value) {
        years = parseInt(years.value, 10);
    }
    
    // データの有効性をチェック 
   if (type && type.value && years && (years > 0) ) {
        
        // 基本となる金額を決める
        switch (type.value) {
            case 'basic':
                cost = 10.00;
                break;
            case 'premium':
                cost = 15.00;
                break;
            case 'gold':
                cost = 20.00;
                break;
            case 'platinum':
                cost = 25.00;
                break;
        } // switchの終わり
        
        // 年数要因を加味
        cost *= years;
        
        // 複数年の場合には割り引く
        if (years > 1) {
            cost *= .80; // 80%
        }
        
        // 合計金額を表示
        U.$('cost').value = '$' + cost.toFixed(2);
        
    } else { // エラーの表示
        if (e.type == 'submit') {
           U.$('cost').value = '有効な値を入力してください。';
        }
    }
    
    // フォームの送信を回避
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
    return false;
    
} // calculate()関数の終わり

window.onload = function() {
    'use strict';
    U.addEvent(U.$('theForm'), 'submit', calculate);
    U.addEvent(U.$('type'), 'change', calculate);
    U.addEvent(U.$('years'), 'change', calculate);
};