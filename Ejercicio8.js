//devuelve el elemento mas largo, si hay dos iguales devuelve el primero
const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(stringList) {
    let longestWord =""
    for(let i = 0; i < stringList.length; i++) {
        if (stringList[i].length > longestWord.length) {
        longestWord = stringList[i] //calculamos las medidas de cada posicion con la palabra mas larga, al final sustituimos si encontramos alguna mas larga.
        }
    }
    return longestWord
}
console.log (findLongestWord(avengers))

//con un for of
function findLongestWord1(stringList) {
    let longestWord1 = ""
    for (let avenger of avengers) {
        if(avenger.length > longestWord1.length) {
            longestWord1 = avenger
        }
    }
    return longestWord1
}
console.log(findLongestWord1(avengers))