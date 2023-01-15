let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let total = 0;

for (s in salaries) {
  total += salaries[s];
}

console.log(total);
