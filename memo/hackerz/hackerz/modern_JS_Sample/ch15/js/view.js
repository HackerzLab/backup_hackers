// view.js
// このスクリプトはAjaxを使って、入札フォームの送信をダイナミックに処理する。
// Ajaxは最新の入札の取得にも使用する

// すべてを即時関数にラップする
(function() {
    'use strict';
    
    // 再利用可能なクロージャ変数
    var bidAjax = null;
    var getBidsAjax = U.getXMLHttpRequestObject();
    var messageDiv = null;
    
    // メッセージの表示に使用する関数
	function showMessage(message, messageClass) {
    
	    // DIVへの参照を取得
	    if (!messageDiv) {
	        messageDiv = U.$('messageDiv');
	    }
        
		// DIVが存在しない場合にはそれを作成
		if (!messageDiv) {
		    messageDiv = document.createElement('div');
		    messageDiv.id = 'messageDiv';
		    var itemHeading = U.$('itemHeading');
		    itemHeading.parentNode.insertBefore(messageDiv, itemHeading);
		} // messageDiv IF-ELSEの終わり
        
        // DIVを更新
	    messageDiv.className = messageClass;
	    messageDiv.innerHTML = message;

	} // showMessage()関数の終わり

    // bidAjax呼び出しが行われたときに呼び出される関数
	function handleBidAjaxResponse() {

	    // readyStateのチェック
	    if (bidAjax.readyState == 4) {

	        // ステータスコードのチェック
	        if ( (bidAjax.status >= 200 && bidAjax.status < 300) 
	        || (bidAjax.status == 304) ) {
                
                // 応答を解析
				var bidResponse = JSON.parse(bidAjax.responseText);

				// 応答のチェック
				if (bidResponse.status == 'accepted') {
    
				    // メッセージを表示
				    showMessage(bidResponse.message, 'good');

				    // 入札情報を取得
				    getBids();
    
				} else { // エラー！
				    // メッセージを表示
				    showMessage(bidResponse.message, 'error');
				}
                
	        } else { // 異常なステータスなので、原則にのっとった形でフォームを送信
	            U.$('bidForm').submit();
	        }
	    } // readyState IFの終わり
    
	} // handleBidAjaxResponse()関数の終わり

    // 入札フォームの送信時に呼び出される関数。
    // フォームのデータを検証し、Ajax要求を出す
	function submitBid(e) {

	    // イベントオブジェクトを取得
	    if (typeof e == 'undefined') e = window.event;

	    // フォームの送信を回避
	    if (e.preventDefault) {
	        e.preventDefault();
	    } else {
	        e.returnValue = false;
	    }

        // フォーム要素への参照を取得
		var bid = U.$('bid').value;

		// 入札価格が現在価格よりも高い場合
		if (bid > currentPrice) {
            
      // Ajaxオブジェクトがまだ存在しない場合、これを作成
			if (!bidAjax) {
			    bidAjax = U.getXMLHttpRequestObject();
			    bidAjax.onreadystatechange = handleBidAjaxResponse;
			}       

      // Ajax要求を実行:
			bidAjax.open('GET', 'ajax/bid.php?bid=' + bid + '&itemId=' + itemId + '&currentPrice=' + currentPrice, true);
			bidAjax.send(null); 
    
	    } else {
	        showMessage('入札は$' + currentPrice.toFixed(2) + 'を超える価格でなくてはなりません。', 'error');
	    }

	    return false;

	} // submitBid()関数の終わり

  // getBidsAjax呼び出しが行われたときに呼び出される関数
	function handleGetBidsAjaxResponse() {
    
	    // readyStateのチェック
	    if (getBidsAjax.readyState == 4) {

	        // ステータスコードのチェック
	        if ( (getBidsAjax.status >= 200 && getBidsAjax.status < 300) 
	        || (getBidsAjax.status == 304) ) {

        // 応答を解析
				var bids = JSON.parse(getBidsAjax.responseText);

				// データが返されたら、テーブルを更新
				if (bids.length > 0) {
                    
          // 現在価格を最初の値に更新
					currentPrice = parseFloat(bids[bids.length-1].bid).toFixed(2);

					// currentSpanと隠しフォーム入力を更新
					U.setText('currentSpan', currentPrice.toString());
					U.setText('currentHidden', currentPrice.toString());
                    
          // テーブルボディへの参照を取得
					var tb = U.$('tableBody');

					// データをループ処理
					for (var i = 0, count = bids.length; i < count; i++) {
    
					    // セルを２つ持つ新しいテーブル行を作成
					    var tr = document.createElement('tr');
					    var td1 = document.createElement('td');
					    var td2 = document.createElement('td');
    
					    // テキストを追加
					    td1.appendChild(document.createTextNode('$' + bids[i].bid));
					    td2.appendChild(document.createTextNode(bids[i].dateSubmitted));
    
					    // セルを行に追加
					    tr.appendChild(td1);
					    tr.appendChild(td2);
    
					    // 行を、テーブルの２つめの行として追加
					    var trs = document.getElementsByTagName('tr');
					    tb.insertBefore(tr, trs[1]);
    
					} // FORループの終わり
               
				} // bids.length IFの終わり

			} // status IFの終わり

		} // readyState IFの終わり
   
	} // handleGetBidsAjaxResponse()関数の終わり
    
    // 更新された入札情報を取得する関数
	function getBids() {
	    getBidsAjax.open('GET', 'ajax/getBids.php?currentPrice=' + currentPrice + '&itemId=' + itemId, true);
	    getBidsAjax.send(null); 
	}

    // ウィンドウのロード時に呼び出される関数。
    // イベントリスナーはここでフォームに追加する必要がある
    // getBidsAjaxオブジェクトを準備する必要もある
	function init() {
    
	  // 必要な操作はJavaScriptから行うので、refreshMessageを隠す
		U.$('refreshMessage').style.display = 'none';

	  // フォーム送信の処理
	  U.addEvent(U.$('bidForm'), 'submit', submitBid);
    
	  // 入札用Ajaxオブジェクトの設定
	  getBidsAjax.onreadystatechange = handleGetBidsAjaxResponse;
    
    // 新しい入札を10秒おきに取ってくるタイマーを作成
		var getBidsTimer = setInterval(getBids, 10000);
        
    // オークションが１時間内に終わる場合には、残り分数を表示する
		if (minutesRemaining < 60) { // タイマーを表示

		    // spanを取得
		    var span = U.$('minutesRemainingSpan');

		    // タイマーを作成
		    var closingTimer = setInterval(function() {
                
        // 残り分数を1分減らす
				minutesRemaining--;

				if (minutesRemaining > 0) {

				    // spanを更新
				    U.setText('minutesRemainingSpan', '残り ' + minutesRemaining + '分');

				} else { // オークション終了！

				    // ２つのタイマーを止める
				    clearInterval(closingTimer);
				    clearInterval(getBidsTimer);
    
				    // ２つのAjaxオブジェクトをクリア
				    bidAjax = null;
				    getBidsAjax = null;
    
				    // イベントハンドラを削除
				    U.removeEvent(U.$('bidForm'), 'submit', submitBid);

				    // 入札フォームを削除
				    var bidForm = U.$('bidForm');
				    bidForm.parentNode.removeChild(bidForm);
    
				    // spanを削除
				    span.parentNode.removeChild(span);

				    // メッセージを表示
				    showMessage('このオークションは今終了しました。', 'error');
				}               
			}, 60000);
    
		} // minutesRemaining IFの終わり
    
	} // init()関数の終わり    

	// イベントリスナーをウィンドウtのロードイベントに割り当てる
	U.addEvent(window, 'load', init);
    
})(); // 即時関数の終わり