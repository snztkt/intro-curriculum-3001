'use strict';
/**
* 与えられた自然数の階乗を返す
* 階乗とは、1からその与えられた自然数までの数をすべてかけたものです
* @param {Number} n
* @returns {Number}
*/
function factorial(n) {
    let result = 1;
    // TODO このコメントを消して正しく実装してください。
    for ( let i = 1; i <= n; i++)
    {
	result = result * i;
    }
    return result;
}
const assert = require('assert');
console.log( factorial(1) );
assert.equal(factorial(1), 1, `1の階乗は1ですが、実際は${factorial(1) }でした`);
console.log( factorial(2) );
assert.equal(factorial(2), 2, `2の階乗は2ですが、実際は${factorial(2) }でした`);
console.log( factorial(3) );
assert.equal(factorial(3), 6, `3の階乗は6ですが、実際は${factorial(3) }でした`);
console.log( factorial(10) );
assert.equal(factorial(10), 3628800, `10の階乗は3628800ですが、実際は${factorial(10) }でした`);
console.log('すべてのテストを通過しました');
