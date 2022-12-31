const removeFromArray = function() {

    var array = arguments[0]

    for (i=0;i<array.length;i++) {
  
        for (a = 0;a < arguments.length;a++){
  
          if (array[i] == arguments[a]){
            array.splice(i,1)
            i--
          }
        }
  // ciclar
      }
      return(array)
  }


// Do not edit below this line
module.exports = removeFromArray;
