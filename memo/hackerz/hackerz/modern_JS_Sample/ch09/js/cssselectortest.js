// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';
    var images = document.querySelectorAll('img.thumbnail');
    console.log(images);

    var aLink = document.getElementById('nav').querySelector('a.selected');
    console.log(aLink);

    var myClass = document.getElementById('someDiv').className;
    console.log(myClass);
    myClass = document.getElementById('someDiv').className = 'newClass';
    console.log(myClass);

    console.log(document.getElementById('someLabel').htmlFor);
    document.getElementById('someLabel').htmlFor = 'someElem';
    console.log(document.getElementById('someLabel').htmlFor);

    console.log(document.getElementById('someP').textContent);

    console.log(document.getElementById('someP').innerHTML);
    document.getElementById('someP').innerHTML = '<a href="somepage.html">link</a>';
    console.log(document.getElementById('someP').innerHTML);
    console.log(document.getElementById('someP').textContent);

    var original = document.getElementById('myTable').innerHTML;
    console.log(original);

    if(typeof window.history.back == 'function') {
        var backSpan = document.getElementById('backSpan');
        backSpan.onclick = function(){
            window.history.back();
        }
    }


}; // onload関数の終わり