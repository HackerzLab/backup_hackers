// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';

    document.getElementById('printLink').onclick = function() {
      window.print();
    }
}

