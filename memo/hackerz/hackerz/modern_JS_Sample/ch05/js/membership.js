// membership.js
// 入会費を計算するスクリプト

// フォームの送信時に呼び出される関数。
// 計算を実行し、falseを返す
function calculate() {
    
    // 厳密モード
    'use strict';

    // 合計金額を保持する変数
    var cost;

    // フォーム要素への参照を取得する
    var type = document.getElementById('type');
    var years = document.getElementById('years');
    
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
        document.getElementById('cost').value = '$' + cost.toFixed(2);
        
    } else { // エラーの表示
        document.getElementById('cost').value = '有効な値を入力してください。';
    }
    
    // 送信を回避するためfalseを返す
    return false;
    
} // calculate()関数の終わり

// 初期設定
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = calculate;
} // init()関数の終わり
window.onload = init;