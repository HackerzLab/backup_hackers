// objecttest.js

// ページのロード時に呼び出される関数。
function init() {
    'use strict';

    /*
    var chapter = {
      num:6,
      title:'複雑な変数型'
    };

    console.log(chapter.num);
    console.log(chapter.title);
    chapter.title = 'かなり複雑な変数型';
    console.log(chapter.title);
    chapter.startPage = 256; // 0;
    console.log(chapter.startPage);

    if(chapter.startPage) {
      console.log('startPageは存在している');
    }else {
      console.log('startPageは存在しない');
    }

    if('startPage' in chapter) {
      console.log('startPageは存在している');
    }else {
      console.log('startPageは存在しない');
    }

    if(typeof chapter.startPage == 'number') {
      console.log('startPageは存在している');
    }else {
      console.log('startPageは存在しない');
    }
    */

    var me = {
      name: 'Larry Ullman',
      age: 42,
      car: {
        make: 'Honda',
        model: 'Fit',
        year: 2008
      },
      favoriteColors: ['Black', 'Blue', 'Gray'],
      tired: true
    };
    console.log(me.car.model);
    console.log(me.favoriteColors[0]);

    console.log(me['car']['model']);
    console.log(me['favoriteColors'][0]);


} // init()関数の終わり

// 初期設定
window.onload = init;