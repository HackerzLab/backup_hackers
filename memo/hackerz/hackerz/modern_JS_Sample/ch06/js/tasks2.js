// task2.js
// to-do listを管理するスクリプト

// グローバル変数が必要
var tasks = []; 

// フォームの送信時に呼び出される関数。
// グローバルの配列にタスクを追加する
function addTask() {
    'use strict';

    // やることを取得
    var task = document.getElementById('task');

    // 出力を表示する要素への参照
    var output = document.getElementById('output');
    
    // 出力に使用する変数
    var message = '';

    if (task.value) {
    
        // 配列に項目を追加
        // tasks[tasks.length] = task;
        tasks.push(task.value);
        
        // ページを更新
        // message = 'to-doリストには ' + tasks.length + ' 個のやることがあります。';
        
        message = '<h2>To-Do</h2><ol>';
        for(var i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        

        /*
        message += '<ol><li>';
        message += tasks.join('</li><li>');
        message += '</li></ol>';
        */

        output.innerHTML = message;

        /*
		if (output.textContent !== undefined) {
			output.textContent = message;
		} else {
			output.innerText = message;
		}
        */
        
    } // task.valueのIFはここまで

    // 送信しないようにfalseを返す
    return false;
    
} // addTask()関数の終わり

// 初期設定
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addTask;
} // init()関数の終わり
window.onload = init;