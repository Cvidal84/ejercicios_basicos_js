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
 

  function nameFinder1(nameList, nameFind) {
    let index = 0
    for (const name of nameList) {
      if(name.toLowerCase() == nameFind.toLowerCase()) {
        return `El nombre ${nameFind} está en el array en la posición ${index}.`
      }
      index++ //el for of no tiene indice, le hemos tenido que meter un index para que vaya sumando y saber en que posición está el nombre que queremos buscar
    }
    return `El nombre ${nameFind} no está en el array.`
  }
  console.log(nameFinder1(names, 'Juanpe'))
  console.log(nameFinder1(names, 'Carlos'))
  console.log(nameFinder1(names,'jessica'))

  
  