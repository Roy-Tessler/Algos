// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(x) {
  if (x < 3) return 1;

  return fib(x - 1) + fib(x - 2);
}
