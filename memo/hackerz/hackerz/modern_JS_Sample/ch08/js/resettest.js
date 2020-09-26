// resetest.js

// windowがロードされたときの機能性を確立
window.onload = function() {
    'use strict';
    U.addEvent(U.$('theForm'), 'reset', function(){
        return confirm('本当にフォームをリセットします？');
    });
};