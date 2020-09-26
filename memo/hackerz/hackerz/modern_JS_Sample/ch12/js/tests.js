// tests.js
// ８章のユーティリティライブラリに対してテストを実行するスクリプト

// テストを定義
var myTests = function() {
	'use strict';
	
	// $()が有効なIDを与えられたとき要素を返すかのテスト
	function testGetElement() {
		jsUnity.assertions.assertNotNull(U.$('output'));
	}
	
	// $()が無効なIDを与えられたときnullを返すかのテスト
	function testGetInvalidElement() {
		jsUnity.assertions.assertNull(U.$('doesNotExist'));
	}
	
	// setText()が有効なIDを与えられたときtrueを返すかのテスト
	function testSetText() {
		jsUnity.assertions.assertTrue(U.setText('output', 'test'));
	}
	
	// setText()が無効なIDを与えられたときfalseを返すかのテスト
	function testCannotSetText() {
		jsUnity.assertions.assertFalse(U.setText('doesNotExist', 'test'));
	}
	
}; // myTestsの無名関数の終わり

// ログング関数の定義
jsUnity.log = function(message) {
	U.$('results').innerHTML += '<p>' + message + '</p>';
};

// テストの実行
jsUnity.run(myTests);