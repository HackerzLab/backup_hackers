// Script 9.5- popups.js
// すべてのリンクでポップアップウィンドウを作成するスクリプト

// リンクがクリックされたときに呼び出される関数
function createPopup(e) {
    'use strict';
    
    // イベントオブジェクトを取得
    if (typeof e == 'undefined') var e = window.event;

    // イベントターゲットを取得
    var target = e.target || e.srcElement;

    // ウィンドウを作成
    var popup = window.open(target.href, 'PopUp', 'height=120,width=120,top=100,left=100,location=no,resizable=yes,scrollbars=yes');
    
    // ウィンドウが開いていればそれにフォーカスを与える
    if ( (popup !== null) && !popup.closed) {
        popup.focus();
        return false; // デフォルトの振る舞いを回避する
    } else { // デフォルトの振る舞いを可能にする
        return true;
    }
    
} // createPopup()関数の終わり

// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';
    
    /*
    // 各リンクにクリックイベントのイベントリスナーを追加
    for (var i = 0, count = document.links.length; i < count; i++) {
        document.links[i].onclick = createPopup;
    } // forループの終わり
    */

    
    var popupLinks = document.getElementsByClassName('popup');
    for (var i = 0, count = popupLinks.length; i < count; i++) {
        popupLinks[i].onclick = createPopup;
    }
    

    /*
    var header = document.getElementById('header');
    var hLinks = header.getElementsByTagName('a');
    console.log(hLinks.length);
    console.log(hLinks[0].id);
    console.log(hLinks[1].href);
    */

}; // onload関数の終わり