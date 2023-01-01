const findTheOldest = function (people) {

    const present = new Date("2023-02-02");
    var difference = 0;
    var older = "";
  
    for (i = 0; i < people.length; i++) {
         if (
            people[i].yearOfDeath == undefined &&
            present.getFullYear() - people[i].yearOfBirth > difference
          ) {
            difference = present.getFullYear() - people[i].yearOfBirth;
            older = people[i];
          }if (people[i].yearOfDeath - people[i].yearOfBirth > difference) {
        difference = people[i].yearOfDeath - people[i].yearOfBirth;
  
        older = people[i];
      } 
    }
  
    return older;
}
// Do not edit below this line
module.exports = findTheOldest;
