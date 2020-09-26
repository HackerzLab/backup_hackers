// Script 8.8 - events.js

// イベント発生時に呼び出される関数。
// イベントのtypeとtargetを報告する
function reportEvent(e) {
    'use strict';

    // イベントオブジェクトを取得
    if (typeof e == 'undefined') e = window.event;

    // イベントターゲットを取得
    var target = e.target || e.srcElement;
    
    // 出力メッセージを作成
    var msg = target.nodeName + ': ' + e.type + '\n';
    
    // テキスト領域にメッセージを出力
    U.$('output').value += msg;
    
} // reportEvent()関数の終わり

// フォームの送信時に呼び出される関数。
// イベントリスナーの追加と削除を行い、送信を回避するためにfalseを返す
function setHandlers() {
    'use strict';
    // 設定できるイベントのリスト
    var events = ['mouseover', 'mouseout', 'click', 'keypress', 'blur'];
    
    // 条件に応じてイベントリスナーの追加と削除を行う
    for (var i = 0, count = events.length; i < count; i++) {
        var checkbox = U.$(events[i]); // 要素を取得
        if (checkbox.checked) { // チェックボックスがチェックされてるかどうかを調べる
            U.addEvent(document, events[i], reportEvent);
        } else {
            U.removeEvent(document, events[i], reportEvent);
        }
    } // FORループの終わり
    
    // テキスト領域のクリア
    U.$('output').value = '';
    
    // 送信を回避するためにfalseを返す
   return false;
    
} // setHandlers()関数の終わり

// ウィンドウがロードされたときの機能性を確立
window.onload = function() {
    'use strict';
    U.$('theForm').onsubmit = setHandlers;
};