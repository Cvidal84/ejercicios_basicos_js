// cuando se reciba por parametro un array cuando es un valor lo suma y si no es un valor calcule la longitud del string y lo sume
const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
    let sumaTotal = 0
    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] === 'string') {
            sumaTotal += list[i].length
        } else if (typeof list[i] === 'number') {
            sumaTotal += list[i]
        } else {
            console.log("No me vale ese dato")
        }
    }
    return(sumaTotal)
}
console.log(averageWord(mixedElements))