//calcular el promedio
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
    let sumaTotal = 0

    for (let i = 0; i < numberList.length; i++) {
        sumaTotal += numberList[i]
    }
    return sumaTotal/numberList.length
}
console.log(average(numbers))