function isEmpty(o) {
  let l = 0;

  for (obj in o) {
    l++;
  }

  if (l > 0) {
    return true;
  } else {
    return false;
  }
}

let object = {
  color: "red",
  number: 12,
};

console.log(isEmpty(object));
