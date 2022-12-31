const repeatString = function (word, n) {
  let string = "";

  if (n < 0) {
    return "ERROR";
  }

  for (var i = 0; i < n; i++) {
    string += word;
  }

  return string;
};

// Do not edit below this line
module.exports = repeatString;
