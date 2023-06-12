/* -------------------------------- OPCION 1 -------------------------------- */
const mostrarLista = (array) => {
    if (Array.isArray(array)) {
        if (array.length === 0) {
            return 'Lista vacía'
        } else {
            return array.map((item) => (item))
        }
    } else {
        return 'No es un Array'
    }
}

/* ------------------------------------ OPCION 2  ----------------------------------- */

const mostrarLista2 = (array) => {
    if (Array.isArray(array)) {
        if (array.length === 0) "Lista vacia"
        else return array.map((item) => (item))
        console.log(`${array.length}`);
    } else {
        return "No es un array"
    }
}

/* ------------------------------------ TEST ----------------------------------- */

const array1 = [1, 2, 3, 4, 5, 6]
const arrayVacio = []

console.log(mostrarLista(array1));
console.log(mostrarLista(arrayVacio));
console.log(mostrarLista("Pilar"));

/* ------------------------------------ - ----------------------------------- */

class Contador {
    constructor(nombre) {
        this.nombre = nombre
        this.contador = 0
    }

    static contadorGlobal = 0

    getResponsable () {
        return this.nombre
    }
    getCuentaGlobal () {
        return `Global = `,  Contador.contadorGlobal
    }
    getCuentaInd () {
        return `Individual ${this.nombre} = ${this.contador}`
    }
    contar () {
        Contador.contadorGlobal++;
        this.contador++;
    }
}

const cont1 = new Contador ("pilar")
const cont2 = new Contador ("paula")

console.log(cont1.getResponsable());
console.log(cont2.getResponsable());

cont1.contar()
console.log(cont1.getCuentaInd());
console.log(cont1.getCuentaGlobal());
console.log("--paula suma 1--");
cont2.contar()
console.log("--pilar suma 1 mas--");
console.log(cont2.getCuentaGlobal());
cont1.contar()
console.log(cont1.getCuentaInd());
console.log(cont2.getCuentaInd());
