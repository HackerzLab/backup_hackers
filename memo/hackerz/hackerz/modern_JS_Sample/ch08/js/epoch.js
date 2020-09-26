// epoch.js

// ページのロード時とマウスオーバーの発生時に呼び出す関数
function updateDuration() {
    'use strict';

    // 今の日付けを取得
    var now = new Date();

    // メッセージを作成
    var message = 'エポックから ' + now.getTime();
    message += ' 秒、経過しています。(マウスを重ねると更新されます)';

    // ページを更新
    U.setText('output', message);
    
} // updateDuration()関数の終わり

// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';
    
    // イベントリスナーの作成
    U.addEvent(U.$('output'), 'mouseover', updateDuration);
    
    // このタイミングでも呼び出す
    updateDuration();
    
};