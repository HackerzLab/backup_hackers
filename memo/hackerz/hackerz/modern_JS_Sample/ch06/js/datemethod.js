// datemethos.js

// ページのロード時に呼び出される関数。
function init() {
    'use strict';

    var today = new Date();
    console.log('今日は' + today.getDate() + '日');
    console.log('今日は' + today.getDay() + '曜日');
    console.log('今年は' + today.getFullYear() + '年');
    console.log('今は' + today.getHours() + '時');
    console.log('今は' + today.getMinutes() + '分');
    console.log('今月は' + today.getMonth() + '月 (実際には１を足す)');
    console.log('今は' + today.getSeconds() + '秒');
    console.log('エポックから' + today.getTime() + 'ミリ秒経過');

    console.log(today.toDateString());
    console.log(today.toISOString());
    console.log(today.toJSON());
    console.log(today.toLocaleDateString());
    console.log(today.toLocaleString());
    console.log(today.toLocaleTimeString());
    console.log(today.toString());
    console.log(today.toTimeString());

} // init()関数の終わり

// 初期設定
window.onload = init;