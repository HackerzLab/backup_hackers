var hash = '';

function updatePage(){
  hash = window.location.hash;
  var content = hash.charAt(1);

  switch (content) {
    case '2':
    console.log('2を表示');
      U.$('#1').style.visibility = 'hidden';
      U.$('#2').style.visibility = 'visible';
      U.$('#3').style.visibility = 'hidden';
      break;
    case '3':
    console.log('3を表示');
      U.$('#1').style.visibility = 'hidden';
      U.$('#2').style.visibility = 'hidden';
      U.$('#3').style.visibility = 'visible';
      break;
    case '1':
    console.log('1を表示');
    default:
      U.$('#1').style.visibility = 'visible';
      U.$('#2').style.visibility = 'hidden';
      U.$('#3').style.visibility = 'hidden';
      break;
  } 
}

function setTab(e) {
  if(typeof e=='undefined') var e = window.event;
  var target = e.target || e.srcElement;
  //console.log(target.href);
  var tab = target.href;
  var numString = tab.charAt(tab.length-1);
  
  window.location.hash = "#" + numString;

   updatePage();
}

// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';

    U.addEvent(U.$('tab'), 'click', setTab);
    
    U.$('#1').style.visibility = 'visible';
    U.$('#2').style.visibility = 'hidden';
    U.$('#3').style.visibility = 'hidden';

    hash = window.location.hash;

    var hashWatcher = setInterval(function(){
        if(window.location.hash != hash) {
          updatePage();
        }
    }, 1000);
}

