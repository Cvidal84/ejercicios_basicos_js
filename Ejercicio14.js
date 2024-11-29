/* Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,... */

const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];
function repeatCounter(list) { //todo esto tengo que repasarlo bien...
    const count = {}

    list.forEach(word => {
        if(count[word]) { //el primero es si la palabra ya se ha encontrado en la lista
            count[word]++
        } else {
            count[word] = 1 // el segundo es si la palabra aparece por primera vez
        }

    })
    return count
}
console.log(repeatCounter(words))