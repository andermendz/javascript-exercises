
// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const somf = people.some((p)=>{
    let today = 2022
    let age = today - p.year
    return age > 19
})
console.log(somf)

const som = people.filter((p)=>{
    let today = 2022
    let age = today - p.year
    return age > 19
})
console.log(som)


// Array.prototype.every() // is everyone 19 or older?

const somv = people.every((p)=>{
    let today = 2022
    let age = today - p.year
    return age > 19
})
console.log(somv)
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const found = comments.find((c)=>{
 return c.id == 823423
})
console.log(found)

// Array.prototype.findIndex()
// Find the comment with this ID

const index = comments.findIndex((c)=>{
    return c.id == 823423
});

console.log(index);

// delete the comment with the ID of 823423
comments.splice(index, 1);
console.log(comments)
