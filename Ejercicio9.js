//iterar sobre el array y sumar cada elemento para obtener un total
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
    let sumaTotal = 0

    for (let i = 0; i < numberList.length ; i++) {
        sumaTotal += numberList[i] //ojo, incrementamos sumaTotal con cada elemento del array de numeros (numberList)
    }
    return sumaTotal
}
console.log(sumNumbers(numbers))
// con un for of
function sumNumbers1(numberList) {
    let sumaTotal1 = 0

    for (let number of numbers) {
        sumaTotal1 += number
    }
    return sumaTotal1
}
console.log(sumNumbers1(numbers))