/* Includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".

Usa la función .includes de javascript. */

const products = ['Camiseta de Metallica', 'Pantalón vaquero', 'Gorra de beisbol', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta']

//como no coincide exactamente con el nombre completo me dice false, voy a buscar otra forma
console.log(products.includes("Camiseta"))

//esto no distingue entre minúsculas y mayúsculas
for (let product of products) {
    if (product.includes("Camiseta")) {
        console.log(product)
    }
}
//esto funciona bien, filtra y enumera todos los que contienen la palabra camiseta independientemente de mayusculas
const result = []
for (const product of products) {
    if (product.toLowerCase().includes("camiseta")) {
        result.push(product)
    }
}
console.log(result)