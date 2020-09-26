// Script 9.3- popup.js
// ポップアップウィンドウを作成するスクリプト

// リンクがクリックされたときに呼び出される関数
function createPopup() {
    'use strict';
    
    // ウィンドウを作成
    var popup = window.open('popupB.html', 'PopUp', 'height=120,width=120,top=100,left=100,location=no,resizable=yes,scrollbars=yes');
    
    // ウィンドウが開いていればそれにフォーカスを与える
    if ( (popup !== null) && !popup.closed) {
        popup.focus();
        return false; // デフォルトの振る舞いを回避する
    }
    
} // createPopup()関数の終わり

// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';
    document.getElementById('link').onclick = createPopup;
};