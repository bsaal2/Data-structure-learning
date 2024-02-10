/** 
 * Fibonacci problems
 * 0, 1, 1, 2, 3, 5, 8...
 * F(n) = F(n-1) + F(n-2)
 *
 * f(5) = f(4) + f(3) = 5
    f(4) = f(3) + f(2) = 3
    f(3) = f(2) + f(1) = 2
    f(2) = f(1) + f(0) = 1
    f(1) = 1
    f(0) = 0
 * 
 * n: nth fibonacci number
 */
function Fibonacci(n) {
    if (n < 2) return n;

    return Fibonacci(n-1) + Fibonacci(n-2);
}

console.time('Fibonacci');
console.log(Fibonacci(40));
console.timeEnd('Fibonacci');