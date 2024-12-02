/* Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.
Recuerda no usar frutas duplicadas.
Finalmente, imprime el array resultante. */
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

fruitIndex = 0 //iniciamos un indice en frutas

for (let food of foodSchedule) {
    if (food.isVegan == false) { //comprobamos si no es vegano
        food.name = fruits[fruitIndex] //reemplazamos con la fruta actual de la lista fruits
        food.isVegan = true // cambiamos a es vegano , true en este caso
        fruitIndex++ //pasamos a la siguiente fruta 

        //en este caso si hubiera mas de 4 campos que cambiar tendríamos que repetir frutas, o ampliar el array.

    }
}
console.log(foodSchedule)