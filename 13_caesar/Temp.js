function caes() {
  const text = arguments[0].split("");
  const out = [];
  console.log(text);

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

    for (a = 0; a < chars.length; a++) {
      if (letter == chars[a].toLowerCase()) {
        var pos = chars[a + arguments[1]];

        while (pos > chars.length) {
          pos = pos - chars.length;
        }
        out.push(chars[i]);
        
      } else if (letter == chars[a].toUpperCase()) {
        out.push(chars[a + arguments[1]].toUpperCase());
      }
    }

  }

  console.log(out.join("").toString());
}

caes("hey", 1);

