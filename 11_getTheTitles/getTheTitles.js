const getTheTitles = function(books) {

    const btitle = []

    for(i=0; i<books.length; i++){
        btitle.push(books[i].title)
      }

      return btitle
    

};

// Do not edit below this line
module.exports = getTheTitles;
