/** 
 * 5! = 5 * 4 * 3 * 2 * 1
 * n! = n to 1 (multiplication)
 */

const calculateFactorial = function(n) {
    if (n === 1) return 1;

    return n * calculateFactorial(n-1);
}

console.time('Factorial');
console.log(calculateFactorial(5));
console.timeEnd('Factorial');