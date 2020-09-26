// employee.js #2
// フォームデータを使ってオブジェクトを作成するスクリプト

// フォームの送信時に呼び出される関数。
// 新しいオブジェクトを作成する
function process() {
    'use strict';

    // フォームへの参照の取得
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var department = document.getElementById('department').value;

    // 出力先への参照
    var output = document.getElementById('output');

    // 新しいオブジェクトの作成
	var employee = {
	    firstName: firstName,
	    lastName: lastName,
	    department: department,
        getName: function() {
            return this.lastName + ', ' + this.firstName;
        },
	    hireDate: new Date()
	}; // セミコロンを忘れずに！
	
	console.log(employee);

    // 出力をHTMLで作成
    var message = '<h2>追加した新入社員</h2>名前: ' + employee.getName() + '<br>';
    message += '部署: ' + employee.department + '<br>';
    message += '入社日: ' + employee.hireDate.toLocaleDateString();
    
    // 新入社員情報を表示
    output.innerHTML = message;
        
    // falseを返す
    return false;
    
} // process()関数の終わり

// 初期設定
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = process;
} // init()関数の終わり
window.onload = init;
