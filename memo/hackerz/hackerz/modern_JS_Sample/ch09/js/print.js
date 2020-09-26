// Script 9.7 - print.js

// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';

    // プリントがサポートされているかどうかを調べる
    if (typeof window.print == 'function') {
        
        
        // ボタンの作成
        var printButton = document.createElement('button');
        
        // テキストを追加
		if (printButton.textContent != 'undefined') {
		    printButton.textContent = 'プリント';
		} else {
		    printButton.innerText = 'プリント';
		}
        
        /*
        var printButton = document.createElement('input');
        printButton.type = 'button';
        printButton.value = 'プリント';
        */
        
        // clickハンドラを追加
        printButton.onclick = function() {
            window.print();
        };
        
        // ボタンをページに追加
        document.body.insertBefore(printButton, document.getElementById('main'));
        
    } // IFの終わり
}; // onload無名関数の終わり