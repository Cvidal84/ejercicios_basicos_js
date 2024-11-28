const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(list) {
    return list.filter((value, index, self) => self.indexOf(value) === index) //este he tenido que buscar por internet, me cuesta entenderlo. 
  }
 const noduplicates = removeDuplicates(duplicates)
 console.log(noduplicates)