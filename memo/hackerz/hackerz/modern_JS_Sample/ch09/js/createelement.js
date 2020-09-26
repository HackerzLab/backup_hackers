// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';
    
    var p1 = document.createElement('p');
    // p.innerText = 'これはテキスト。';
    p1.textContent = 'これはテキスト1。';
    p1.className = 'enhanced';
    var div = document.getElementById('someDiv');
    div.appendChild(p1);

    var p2 = document.createElement('p');
    p2.textContent = 'これはテキスト２。';
    // p1の前にp2を挿入
    div.insertBefore(p2,p1);

    /*    
    var p3 = document.createElement('p');
    p3.textContent = 'これはテキスト３。';
    var div2 = document.getElementById('someDiv2');
    div2.replaceChild(p3,document.getElementById('someImg'));
    
    var t = document.createTextNode('これはテキスト４');
    div2.appendChild(t);
    */
    


}; // onload関数の終わり