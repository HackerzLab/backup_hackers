

function doFade(e){
    
    var div = document.getElementById('someDiv');
    var opacity = 1;
    var fader = setInterval(function() {
        opacity -= .1; // 不透明度を少しずつ下げる
        if (opacity >= 0) { // 負の数になる前に停止する
            if (typeof div.style.opacity == 'string') { // 大部分のブラウザ
                div.style.opacity = opacity;
            } else { // IE
                div.style.filters = 'alpha(opacity=' + (opacity * 100) + ')';
            }
        } else { // タイマーを止める
            clearInterval(fader);
        }
    }, 100); // 100ミリ秒おき

}

// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';

    var elem = document.createElement('div');
    elem.id = 'someDiv';
    elem.style.width = '100px';
    elem.style.height = '100px';
    elem.style.backgroundColor = '#FF0000';
    document.body.appendChild(elem);

    document.getElementById('timerbutton').onclick = doFade;

};