/* Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false. */

const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function nameFinder(nameList, nameFind) { //me parece muy complicado de hacer
    const index = nameList.findIndex(name => name.toLowerCase() === nameFind.toLowerCase())
    if (index !== -1) {
        return `El nombre ${nameFind} está en el array en la posición ${index}.`
    } else {
        return `El nombre ${nameFind} no está en el array.`
    }
  }

  console.log(nameFinder(names, 'Juanpe'))
  console.log(nameFinder(names, 'Carlos'))
  console.log(nameFinder(names,'jessica'))

  
  