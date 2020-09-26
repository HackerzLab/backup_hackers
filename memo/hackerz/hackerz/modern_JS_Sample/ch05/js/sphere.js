// sphere.js #2
// 球の体積を計算するスクリプト

// フォームの送信時に呼び出される関数。
// 計算を実行し、falseを返す
function calculate() {
    'use strict';
    
    // 体積を保持する変数
    var volume;
    
    // フォームの値への参照を取得する
    var radius = document.getElementById('radius');

    // 参照が存在しかつ値が正の数である場合のみ処理する
    if (radius && (radius.value > 0)) {

        // 計算の実行
        volume = (4/3) * Math.PI * Math.pow(radius.value, 3);

        // 体積をフォーマット
        volume = volume.toFixed(4);

    } else {
        volume = '有効な半径を入力してください。';

    }
        // 体積の表示
        document.getElementById('volume').value = volume;

    //} // IFの終わり
    
    // 送信を回避するためfalseを返す
    return false;
    
} // calculate()関数の終わり

// ウィンドウがロードされたら呼び出される関数。
// ここではフォームにイベントリスナーを追加する必要がある
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = calculate;
} // init()関数の終わり
window.onload = init;
