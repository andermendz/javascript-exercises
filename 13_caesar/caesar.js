const caesar = function() {
    const text = arguments[0].split("");
    const move = arguments[1];
    const out = [];
  
  
    // remake tomorrow
  
    // a variable like POS is needed
    // remake from 0
    const chars = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
  
    for (i = 0; i < text.length; i++) {
      var letter = text[i];
  
      var pos = 0;
  
      for (a = 0; a < chars.length; a++) {
        if (letter == chars[a].toUpperCase()) {
          pos = a + move;
  
          if (move < 1) {
            while (pos < 0) {
              pos = pos + chars.length;
            }
          } else if (move >= 1) {
            while (pos >= chars.length) {
              pos = pos - chars.length;
            }
          }
  
          out.push(chars[pos].toUpperCase());
        } else if (letter == chars[a].toLowerCase()) {
          pos = a + move;
  
          if (move < 1) {
            while (pos < 0) {
              pos = pos + chars.length;
            }
          } else if (move >= 1) {
            while (pos >= chars.length) {
              pos = pos - chars.length;
            }
          }
          out.push(chars[pos].toLowerCase());
        } else if (
          letter == "," ||
          letter == "." ||
          letter == " " ||
          letter == "!"
        ) {
          out.push(letter);
          break;
        }
      }
    }
  
  
    return(out.join("").toString());
  }

// Do not edit below this line
module.exports = caesar;
