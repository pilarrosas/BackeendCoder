 /* ------------------------------- MUTABILIDAD: la capacidad de un elemento de cambiar su estado. 
 Cambiando el valor de la propiedad de un objeto, o la referencia que tiene una variable, estás haciendo uso de la mutabilidad de estos elementos. ------------------------------ */

const array = []

array.push(10)
console.log(array)

const user = {
    name: "Pilar",
    age: 35,
}

user.name = "Paula"
user.age = 40


console.log(user);

 /* -------------------------------- FUNCIONES: conjunto de instrucciones que se agrupan para realizar una tarea concreta y que se pueden reutilizar fácilmente. ------------------------------- */

 // basica
function saludos (name) {
    return `Hola ${name}`
};

//arrow

const saludos2 = (name) => {
    return `Hola ${name}`
};

const saludos3 = name => `Hola ${name}`

console.log(saludos('Pilar'));
console.log(saludos2('Paula'));
console.log(saludos3('Lujan'));

 /* -------------------------------- CALLBACK: es una función que se pasa a otra función como un argumento, 
 que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción. -------------------------------- */

const arrayNumb = [1, 2, 3, 4, 5, 6]

 // const arrayNumb2 = array.filter(function(x) {
//     x > 1
 // })

const arrayNumb2 = arrayNumb.filter((x) => x > 1)
console.log(arrayNumb2);

/* ---------------------------- TEMPLATE STRINGS: son cadenas literales de texto incrustadas en el código fuente que permiten su interpolación mediante expresiones.  ---------------------------- */

let nombre = 'Bruno';
let edad = 4;

console.log(`Mi nombre es ${nombre} y tengo ${edad} años`);

const multilinea = `
Esta frase tiene
mas de una linea
`

console.log(multilinea);

/* --------------------------------- CLOSURE: Las funciones pueden acceder valores fuera de su contexto -------------------------------- */

const value = 8
function example() {
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return data.filter(item => item > value)
}

console.log(example());

/* --------------------------------- CLASES --------------------------------- */

class Personas {
    constructor(nombres) {
        this.nombres = nombres
    }
    static edad = "variable estatica o global que esta dentro de la CLASE pero por fuera del CONSTRUCTOR, valor que no cambia y no depende de la clase" 
    getNombres(){
        return this.nombres
    }
}

const instancia1 = new Personas("Pilar")

console.log(instancia1.getNombres());
console.log(Personas.edad);