const palindromes = function (str) {
  const word = [];
  const rev = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && str[i] !== "," && str[i] !== "!" && str[i] !== ".") {
      word.push(str[i].toLowerCase());
    }
  }

  for (let i = 0; i < word.length; i++) {
    rev.unshift(word[i]);
  }

  if (word.join("").toString() == rev.join("").toString()) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
