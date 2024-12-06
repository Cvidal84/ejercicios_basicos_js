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

 //antonio, lo encaminó así en clase.
 function removeDuplicates3(list) {
  const uniques = []
  for (const item of list) {
    if (!uniques.includes(item)) {
      uniques.push(item)
    }
  }
  return(uniques)
 }
 console.log(removeDuplicates3(duplicates))