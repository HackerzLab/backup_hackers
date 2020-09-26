// tasks.js #4
// to-do listを管理するスクリプト

// Taskオブジェクトを作成する関数
// やることと優先度の２つを引数に取る
function Task(name, priority) {
    'use strict';
	
	// パラメータを変数に代入
	this.name = name;
	this.priority = priority;

	// 完了したかどうかを保持する変数。初期値はfalse（完了していない）
	this.completed = false;
	
	// toString()メソッドを定義
	this.toString = function() {
		return this.name + ' (' + this.priority + ')';
	};
	
} // Task関数の終わり

// セットアップ
window.onload = function(){
    'use strict';

	// フォームへの参照
	var task = document.getElementById('task');
	var priority = document.getElementById('priority');
	var output = document.getElementById('output');

	// やることを保持する配列の変数
	var tasks = []; 

	// フォームの送信時に呼び出される関数。
	// やることを配列に追加する
	document.getElementById('theForm').onsubmit = function() {
		
		// 新しいTaskを作成
		var t = new Task(task.value, priority.value);

		// 配列に追加
		tasks.push(t);
		
		// 出力を更新
        output.innerHTML = 'To-Doリストには現在 <b>' + tasks.length + '</b> アイテムあります。 今追加されたのは：<br>' + t.toString();        

	    // 送信を回避するためにfalseを返す
        return false;

	}; // onsubmitの無名関数の終わり

}; // onloadの無名関数の終わり