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
  //forma de hacerlo 1, esta no la entiendo bien.
  function removeDuplicates(list) {
    return list.filter((value, index, self) => self.indexOf(value) === index) //este he tenido que buscar por internet, me cuesta entenderlo. 
  }

 const noduplicates = removeDuplicates(duplicates)
 console.log(noduplicates)

 //forma de hacerlo 2, me parece más fácil
 function removeDuplicates2(list) {
  const removeDup = new Set(list)
  return removeDup
 }
 console.log(removeDuplicates2(duplicates))