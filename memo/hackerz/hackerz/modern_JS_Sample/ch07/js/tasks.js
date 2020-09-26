// task.js $3
// to-do listを管理するスクリプト

// この即時実行関数がすべての処理を行う
(function(){
    
    // やることを保持する変数
    var tasks = []; 

    // フォームの送信時に呼び出される関数。
    // やることを配列に追加する
    function addTask() {
        'use strict';
    
        var task = document.getElementById('task');
        var output = document.getElementById('output');
        var message = '';

        if (task.value) {
            tasks.push(task.value);        
            message = '<h2>To-Do</h2><ol>';
            for(var i = 0, count = tasks.length; i < count; i++) {
                message += '<li>' + tasks[i] + '</li>';
            }
            message += '</ol>';
            output.innerHTML = message;
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

})(); 

