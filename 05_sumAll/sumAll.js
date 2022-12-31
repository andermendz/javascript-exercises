const sumAll = function () {
  var a;
  var b;
  var out = 0;

  if (
    typeof arguments[0] &&
    typeof arguments[1] == "number" &&
    arguments[0] > 0 &&
    arguments[1] > 0
  ) {
    if (arguments[0] < arguments[1]) {
      a = arguments[0];
      b = arguments[1];
    } else if (arguments[0] > arguments[1]) {
      b = arguments[0];
      a = arguments[1];
    }
    for (var i = 1; i <= b; i++) {
      out += i;
    }
    return out;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
