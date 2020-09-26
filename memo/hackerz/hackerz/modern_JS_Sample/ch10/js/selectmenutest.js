

function selectMenuChanged(e){
	// console.log("changed");
	// console.log(document.getElementById('selectMenu').value);
	// console.log(document.getElementById('selectMenu').selectedIndex);

	var elem = document.getElementById('selectMenu');
	var selected = [];
	for(var i=0, count=elem.options.length; i<count; i++){
		// 全オプションにアクセス
		// console.log(elem.options[i]);
		// そのオプションが選択されているかどうか
		// console.log(elem.options[i].selected);
		// そのオプションが選択されているなら
		if(elem.options[i].selected){
			// 値と表示テキストを出力
			// console.log(elem.options[i].value);
			// console.log(elem.options[i].text);
			selected.push(elem.options[i].value);
		}
	}
	console.log(selected);
	console.log(selected.length + '個選択された。');

}

// ウィンドウのロード時、機能性を確率
window.onload = function() {
    'use strict';
    
    /*
	var data1 = document.getElementById('selectMenu').value;
	console.log(data1);
	document.getElementById('selectMenu').selectedIndex = 1;
	var data2 = document.getElementById('selectMenu').value;
	console.log(data2);
	*/

	console.log(document.getElementById('selectMenu').selectedIndex);
    document.getElementById('selectMenu').onchange = selectMenuChanged;
};