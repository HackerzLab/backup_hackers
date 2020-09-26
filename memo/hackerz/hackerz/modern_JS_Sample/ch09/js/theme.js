// Script 9.13 - theme.js

// テーマの設定で呼び出される関数
function setTheme(theme) {
    'use strict';

    // スタイルシート用変数
    var css = null;
    
    // スタイルシートが存在しない場合には作成する
    if (document.getElementById('cssTheme')) {
        css = document.getElementById('cssTheme');
        css.href = 'css/' + theme + '.css';
    } else { // 作成する
        css = document.createElement('link');
        css.rel = 'stylesheet';
        css.href = 'css/' + theme + '.css';
        css.id = 'cssTheme';
        document.head.appendChild(css);
    }
    
} // setTheme()関数の終わり

// リンクのクリック時に呼び出される関数
function setThemeCookie(e) {
    'use strict';

    console.log(e);

    // イベントオブジェクトを取得
    if (typeof e == 'undefined') e = window.event;

    // デフォルトの振る舞いを回避
    
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }

    // イベントターゲットを取得
    var target = e.target || e.srcElement;

    // クッキーを設定
    var expire = new Date(); // これは今日！
    expire.setDate(expire.getDate() + 7); // 有効期限は１週間！
    COOKIE.setCookie('theme', target.id, expire);
    
    // テーマを更新
    setTheme(target.id);

    return false; // デフォルトの振る舞いを回避
    
} // setThemeCookie()関数の終わり

// ウィンドウがロードされたときの機能性を確立
window.onload = function() {
    'use strict';

    // 各テーマリンクに、clickイベントハンドラを追加
    document.getElementById('aTheme').onclick = setThemeCookie;
    document.getElementById('bTheme').onclick = setThemeCookie;
    
    // クッキーの値を取得
    var theme = COOKIE.getCookie('theme');

    // 値が存在していた場合には、そのテーマを設定
    if (theme) {
        setTheme(theme);
    }
    
}; // onload無名関数の終わり