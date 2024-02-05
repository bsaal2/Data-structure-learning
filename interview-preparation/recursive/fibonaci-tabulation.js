/** 
 * Fibonacci problems
 * 0, 1, 1, 2, 3, 5, 8...
 * F(n) = F(n-1) + F(n-2)
 * Tabulation Technique
 * Populate all the values in cache initially
 * Example: f(0) and f(1), we already know
 * Now populate from f(2) -> f(40) for calculating the 40th Fibonacii sequence
 * n: nth fibonacci number
 */

const cacheTabulation = {
    0: 0,
    1: 1
};
function populateCache(n) {
    for (let index = 2; index <= 40; index++) {
        const before = cacheTabulation[index - 1];
        const moreBefore = cacheTabulation[index - 2]
        cacheTabulation[index] = before + moreBefore;
    }
}

function Fibonacci(n) {
    populateCache(40);
    return cacheTabulation[n];
}
    
console.time('Fibonacci');
console.log(Fibonacci(40));
console.timeEnd('Fibonacci');