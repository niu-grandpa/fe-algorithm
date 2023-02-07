/*
 * 递归
 * 斐波那契数列4种解法
 * 1.迭代
 * 2.递归
 * 3.记忆化递归
 * 4.动态规划
 */

function iterator(n: number) {
  if (n <= 2) return n;
  let a = 0,
    b = 0,
    c = 1,
    i = 2;
  for (; i <= n; i++) {
    a = b;
    b = c;
    c = a + b;
  }
  return c;
}

function recursion(n: number) {
  if (n <= 2) return;
  return recursion(n - 1) + recursion(n - 2);
}

function memoization(n: number) {
  const fib = (n: number, memo: number[]) => {
    if (memo[n] !== undefined) return memo[n];
    return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
  };
  return fib(n, [0, 1]);
}

function dpFib(n: number) {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
