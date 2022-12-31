const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a) {
  var s = 0;

  for (var i = 0; i < a.length; i++) {
    s += a[i];
  }
  return s;
};

const multiply = function (a) {
  var t = 1

  for (var i = 0; i < a.length; i++) {
    t *= a[i];
  }

  return t;
};

const power = function (a,b) {

  return a**b
};

const factorial = function (n) {

 var result = 1
  // REMAKE AND MAKE IT RIGHT
  for (i=1;i <= n;i++) {
    result *= i
  }
return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
