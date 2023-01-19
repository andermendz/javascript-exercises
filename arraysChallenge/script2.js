const items = [
  { name: "jacob", money: 100 },
  { name: "job", money: 50 },
  { name: "jcob", money: 20 },
  { name: "cob", money: 10 },
];

const tt = items.reduce((total, p) => {
  return p.money + total;
}, 0);
console.log(tt);

const pp = [
  { name: "jacob", age: 30 },
  { name: "job", age: 40 },
  { name: "jcob", age: 30 },
  { name: "cob", age: 24 },
];

const group = pp.reduce((grouped, people) => {
  const age = people.age;
  if ((grouped[age] == null)) grouped[age] = [];
  grouped[age].push(people);
  return grouped
}, {});

console.log(group);
