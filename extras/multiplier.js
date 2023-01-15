let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (o in obj) {
    if (typeof obj[o] == "number") {
      obj[o] = obj[o] * 2;
    }
  }
}
console.log(menu);
multiplyNumeric(menu);
console.log(menu);
