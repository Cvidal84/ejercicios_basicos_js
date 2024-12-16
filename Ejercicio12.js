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
  
//se crea una nueva array, usamos un for of para meter los items que no esten en uniques, si estan no se meten.
 function removeDuplicates(list) {
  const uniques = []
  for (const item of list) {
    if (!uniques.includes(item)) {
      uniques.push(item)
    }
  }
  return(uniques)
 }
 console.log(removeDuplicates(duplicates))