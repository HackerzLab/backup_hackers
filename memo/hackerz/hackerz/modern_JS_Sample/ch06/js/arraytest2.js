// datemethos.js

// ページのロード時に呼び出される関数。
function init() {
    'use strict';
    /*
    var primes = [1, 3, 5, 7];
    var result1 = [];
    result1 = primes.pop();
    console.log(result1);
    console.log(primes);
    */

    var people = ['Fred', 'Daphne', 'Velma', "Shaggy"];
    /*
    var result2 = people.splice(0,1);
    console.log(result2);
    console.log(people);
   */
   /*
   var person = people.splice(0,1);
   console.log(person);
   */
   /*
   people.splice(2, 0, 'Chalie', 'Mac');
   console.log(people);
   */

   /*
   var person = people.splice(-1, 1);
    console.log(person);
     console.log(people);
     */

     /*
     var primes = [1, 3, 5, 7];
     var twoPrimes = primes.slice(0, 2);
      console.log(primes);
     console.log(twoPrimes);
     */

    var primes = [1, 3, 5, 7];
    var aPrime = primes.slice(-2);
    console.log(aPrime);
    var bPrime = primes.slice(-2, -1);
    console.log(bPrime);
    console.log(primes);

} // init()関数の終わり

// 初期設定
window.onload = init;