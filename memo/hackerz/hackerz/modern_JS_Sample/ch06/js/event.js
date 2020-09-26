// event.js
// ２つの日付けを検証し、その期間日数を計算する

// フォームのロード時に呼び出される関数。
// 日付けを処理し、falseを返す
function process() {
    'use strict';

    // フォーム要素への参照を取得
    var start = document.getElementById('start');
    var end = document.getElementById('end');

    // 段落（p要素）への参照を取得
    var output = document.getElementById('output');
    
    // 出力用変数
    var message = '';

    var interval = '';
    var day = 1000 * 60 * 60 *24;
    
    // 開始と終了の日付けの検証
    
    // 入力された値で２つの日付けを作成してみる
    var startDate = new Date(start.value);
    var endDate = new Date(end.value);
    if ( startDate.getTime() && endDate.getTime() ) {
        
        // 開始日の方が早いことを確認
        if (startDate < endDate) {
            
            // インターバルを求める
            var diff = endDate - startDate;

            // 日数に限定する
            if (diff <= day) {
                interval = '1 day';
            } else {
                interval = Math.round(diff/day) + ' 日';
            }
            
            // メッセージの作成
            message = 'イベントの開始日は ' + startDate.toLocaleDateString();
            message += 'で、終了日は ' + endDate.toLocaleDateString();
            message += 'です。期間は ' + interval + 'です。';
            
        } else { // 開始日が終了日より前でない！
            message = '開始日は終了日より前でないといけません！';
        }
    
    } else { // 一方または両方の日付けの入力が無効！
        message = '開始と終了の日付けはMM/DD/YYYYの形式で入力してください。';
    }
    
    // 段落の更新
	if (output.textContent !== undefined) {
		output.textContent = message;
	} else {
		output.innerText = message;
	}
        
    // 送信を回避するためにfalseを返す
    return false;
    
} // process()関数の終わり

// 初期設定
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = process;
} // init()関数の終わり
window.onload = init;