//cambia la edad de luke de 19 a 25 años
const jedi = {nombre: "Luke Skywalker", edad: 19};
//opción1
jedi.edad = 25
console.log(jedi)
//opcion2
jedi["edad"] = 25
console.log(jedi)

//parte 2 del ejercicio
//Crea tres variables y muestra un mensaje por pantalla
let nombre = "Leia"
let apellido = "Organa"
let edad = 20
console.log("Soy "+nombre+" "+apellido+", tengo "+edad+" años y soy una princesa de Alderaan.")
console.log(`Soy ${nombre} ${apellido}, tengo ${edad} años y soy una princesa de Alderaan.`)

//parte 3 del ejercicio
//Calcula el precio total de los dos sables
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

// Tu código para calcular el precio total aquí...
let total = sable1.precio + sable2.precio
let total1 = sable1["precio"] + sable2["precio"]
console.log("El precio de los dos sables es: "+total)
console.log(`El precio de los dos sables es ${total1}`)

//parte 4 del ejercicio
let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable
precioBaseGlobal = 25000;

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

// Tu código para actualizar el precio final de cada nave aquí...
nave1.precioFinal = precioBaseGlobal + nave1.precioBase;
nave2.precioFinal = precioBaseGlobal + nave2.precioBase;
console.log(nave1);
console.log(nave2);
nave1["precioFinal"] = precioBaseGlobal + nave1["precioBase"]
nave2["precioFinal"] = precioBaseGlobal + nave2["precioBase"]
console.log(nave1)
console.log(nave2)
//lo he duplicado para hacerlo de las dos formas, disculpa si es mucho toston


