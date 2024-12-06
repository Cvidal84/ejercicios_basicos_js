/* Mixed For...of e includes: Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato (también podéis crear uno nuevo con solo los que NO incluyan esa palabra).
Recuerda usar la función .includes() para comprobar la palabra. */
const toys = [
    {id: 5, name: 'Transformers'}, 
    {id: 11, name: 'LEGO'}, 
    {id: 23, name: 'Hot Wheels'}, 
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];

const filteredToys =[]

for (let toy of toys) {
    if (!toy.name.includes("gato")) {
        filteredtoys.push(toy)
    }
}
console.log(filteredToys)

/* este ejercicio se podria hacer como el de antes pero es mejor hacerlo asi
porque sino se pueden cambiar los indices si vamos borrando elementos de un Array,
es siempre mejor hacer un array nuevo */