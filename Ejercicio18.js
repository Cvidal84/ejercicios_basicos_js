/* Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40. Imprime en un console log el array resultante. */
const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

for (let i = 0; i < placesToTravel.length; i++) {
    if(placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
        placesToTravel.splice(i,1)
        i-- //ajusta el indice porque los elementos se pueden desplazar, aunque lo he probado sin y me funcionaba.
        //no es recomendable borrar trozos de arrays, es mejor sacar una nueva con lo que queramos mostrar.
    }
}
console.log(placesToTravel)