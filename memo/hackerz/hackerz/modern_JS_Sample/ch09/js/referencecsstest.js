


// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';
    
  var cssList = document.styleSheets;
	console.log(cssList.length);
	console.log(cssList[0]);

	// var sheet = cssList[0];

     var sheet = document.getElementById('mainStyleSheet').sheet;
   // console.log(sheet);
    /*
    for(var prop in sheet){
    	console.log(prop + ': ' + sheet1[prop])
    }
    */
   //sheet.disabled = 'disabled';

    //document.styleSheets[0].insertRule('h1 {color:red;}',sheet.cssRules.length);
   sheet.insertRule('h1 {color:#FF00FF;}',sheet.cssRules.length);
   sheet.insertRule('p {font-size:28px;}',sheet.cssRules.length);

   sheet.insertRule('.hide {visibility:hidden;}',sheet.cssRules.length);
   sheet.insertRule('h1 {color:#000000;}',sheet.cssRules.length);

   sheet.deleteRule(sheet.cssRules.length - 1);

   var s = document.createElement('style');
   s.innerHTML = 'body {font-size:90%;font-family:arial,sans-serif;color:red;}';
   document.body.appendChild(s);

   // IE 8以前用
  // var sheet = document.getElementById('mainStyleSheet').styleSheet;
  // var sheet = document.styleSheets[0];
  /*
   for(var prop in sheet){
      // console.log(prop + ': ' + sheet[prop])
    }
    */
  //sheet.disabled = 'disabled';
  //console.log(sheet.rules.length);

  // sheet.addRule('h1', 'color:red',sheet.rules.length);
  // sheet.addRule('p', 'color:yellow',sheet.rules.length);
  // sheet.addRule('.hide', 'visibility:hidden',sheet.rules.length);


	
}; // onload関数の終わり