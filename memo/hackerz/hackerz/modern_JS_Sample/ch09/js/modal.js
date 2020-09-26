// Script 9.10 - modal.js

// ウィンドウを開くために呼び出される関数
function openModal() {
    'use strict';

    // closeModalボタンにクリックハンドラを追加
    document.getElementById('closeModal').onclick = closeModal;
    
    // modal DIVを見えるようにする
    document.getElementById('modal').style.display = 'inline-block';

    // openModalボタンのクリックハンドラを削除する
    document.getElementById('openModal').onclick = null;
    
} // openModal()関数の終わり

// ウィンドウを閉じるために呼び出される関数
function closeModal() {
    'use strict';

    // openModalボタンにクリックハンドラを追加
    document.getElementById('openModal').onclick = openModal;

    // modal DIVを見えないようにする
    document.getElementById('modal').style.display = 'none';

    // closeModalボタンのクリックハンドラを削除する
    document.getElementById('closeModal').onclick = null;
    
} // closeModal()関数の終わり

// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';

    // openModalボタンにクリックハンドラを追加
    document.getElementById('openModal').onclick = openModal;

};