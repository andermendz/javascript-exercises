const fibonacci = function (n) {
  if (n < 1) {
    return "OOPS";
  }

  const fib = [1];

  var n1 = 0;
  var n2 = 1;
  var n3 = 0;

  while (fib.length <= n) {
    n3 = n1 + n2;

    n1 = n2;
    n2 = n3;

    fib.push(n3);
  }

  return fib[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
