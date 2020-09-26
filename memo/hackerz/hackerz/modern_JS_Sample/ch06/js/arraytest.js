// datemethos.js

// ページのロード時に呼び出される関数。
function init() {
    'use strict';

    var myList1 = ['あ', 'い', 'う', 'え', 'お'];
    /*
    for(var i = 0; i < myList1.length; i++){
        console.log(myList1[i]);
    }
    */
    
    for(var i = 0, count = myList1.length; i < count; i++){
        console.log(myList1[i]);
    }
    
   var myList2 = [1, undefined, 3];
   /*
   for(var i = 0, count = myList2.length; i < count; i++){
        if(myList2[i] !== undefined){
            console.log(myList2[i]);
        }
   }
   */
   var myList3 = [1, 2, 3];
   /*
   for(var i = 0, count = myList3.length; i < count; i++){
        if(i in myList3 ){
            console.log(myList3[i]);
        }
   }
   */
   var primes = [];
   /*
   primes.push(1);
   console.log(primes);
   primes.push(3, 5, 7);
   console.log(primes);
   primes.push(['A', 'B']);
   console.log(primes);

   primes.unshift(1);
   console.log(primes);
   */

   var grid = [[2,4,6,8],[1,3,5]];
   /*
   console.log(grid.length);
   console.log(grid[0].length);
   console.log(grid[1].length);
   console.log(grid[0][0]);
   console.log(grid[1][2]);
   
   for(var i=0, count1=grid.length; i<count1; i++){

        for(var j=0, count2=grid[i].length; j<count2; j++){
            console.log(grid[i][j]);
        }

   }
   */
   console.log(primes.concat([1,2,3],[4,5,6]));
   


} // init()関数の終わり

// 初期設定
window.onload = init;