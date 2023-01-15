let user = {};

user.name = "John";
user.surname = "Doe";
console.log(user);

user.name = "Peter";
console.log(user);

delete user.name;
console.log(user);
