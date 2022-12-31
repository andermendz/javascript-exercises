const reverseString = function(n) {

const str = []


for (i = 0; i < n.length; i++){

   str.unshift(n[i]);
}

return(str.join("").toString())

};

// Do not edit below this line
module.exports = reverseString;
