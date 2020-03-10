//Ejercicio 1
//Determina el resultado de un número x elevado a una potencia n.

function elevar(x, y) {
    return Math.pow(x, y);
}
console.log("---------------------------------------------------");
console.log("Potencia de 2^4 es:");
console.log(elevar(2, 4))

//Ejercicio 2
//Determina si un número n se encuentra en un rango determinado.
console.log("---------------------------------------------------");
let number = 10;
if (number >= 10 && number <= 100) {
    console.log("El numero " + number + " esta en el rango de 10 a 100");
} else {
    console.log("El numero " + number + " no esta en el rango de 10 a 100");
}

//Ejercicio 3
//Dado un número entero en segundos, determinar la cantidad de horas, minutos y segundos que contiene.

function reloj(seconds) {
    var hour = Math.floor(seconds / 3600);
    hour = (hour < 10) ? '0' + hour : hour;
    var minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10) ? '0' + minute : minute;
    var second = seconds % 60;
    second = (second < 10) ? '0' + second : second;
    return hour + ':' + minute + ':' + second;
}
var segundos = 9690;
console.log("---------------------------------------------------");
console.log("La conversion del numero: " + segundos + " a hrs, min y seg es: " + reloj(segundos));

//Ejercicio 4
//Determine el mayor de 4 enteros.
function mayor(num1, num2, num3, num4) {
    return Math.max(num1, num2, num3, num4);
}
console.log("---------------------------------------------------");
console.log("Arreglo [9,35,5,7]");
console.log("El número mayor del arreglos es: " + mayor(9, 35, 5, 7));

//Ejercicio 5
//Calcula la suma de una lista (arreglo) de elementos.
var num = [1, 2, 3, 4, 5], lista = 0;
num.forEach(function (num) {
    lista += num;
});
console.log("---------------------------------------------------");
console.log("Arreglo: " + num);
console.log("La suma del arreglo es:" + lista);

//Otro ejemplo de suma de una lista (arreglo)
let numeros = [1, 2, 3, 4, 5, 100, 20, 80];
let total = numeros.reduce((a, b) => a + b, 0);
console.log("---------------------------------------------------");
console.log("Arreglo: " + numeros);
console.log("La suma del arreglo es:");
console.log(total);

//Ejercicio 6
//Determina si un elemento dado está contenido en una lista. Devuelve verdadero o falso.

const arreglo = [8, 6, 3, 0, 7];
console.log("---------------------------------------------------");
console.log(arreglo);
console.log(arreglo.includes(0));
console.log(arreglo.includes(9));

//Ejercicio 7
//Determina si dada una lista, ésta se encuentra ordenada. Se debe devolver verdadero o falso. 
const ordenar = () => {
    //var arreglo1 = [32,65,24,87,65,34,33,74,47];
    var arreglo1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log("El arreglo es: ")
    console.log(arreglo1);

    var numb = 0;

    for (let i = 0; i < arreglo1.length; i++) {
        if (numb < arreglo1[i]) {
            numb = arreglo1[i];
            var arregloo = true;
        } else {
            var arregloo = false;
        }
    }
    return arregloo;
}
console.log("---------------------------------------------------");
console.log("¿El arreglo está ordenado? " + ordenar());

//Ejercicio 8
//Dadas dos listas, determine si son iguales. Devolver verdadeo o falso.

console.log("---------------------------------------------------");
var arreglox = [5, 4, 3, 2, 1];
var arregloy = [1, 2, 0, 4, 0];
//var arreglox = [1,2,3,4,5];
//var arregloy = [1,2,3,4,5];

console.log(arreglox);
console.log(arregloy);


if (arreglox.sort().join(',') === arregloy.sort().join(',')) {
    console.log('True, Los valores son iguales');
}
else console.log('False, Los valores no son iguales');

//Ejercicio 9
//Realizar una función recursiva que retorne como salida el resultado de la suma 1 + 3 + 5 + 7 + 9 + N.

const suma = numeros => {

    if (numeros.length === 0) {
        return 0;
    } else {
        let [first, ...rest] = numeros;
        return first + suma(rest);
    }
}
console.log("---------------------------------------------------");
console.log("Arreglo: [1,3,5,7,9,10] la suma es: ");
console.log(suma([1 + 3 + 5 + 7 + 9 + 10]));

//Ejercicio 10
//Realizar una función que reciba una lista y devuelva empleando recursividad otra lista de los elementos pares. 

let numw = [1,2,3,4,5,6,7,8];

const parlist = ls => {
    let result = [];
    if(ls.length === 0){
        return result;
    }
    if (ls[0] % 2 === 0){
        result.push(ls[0]);
    }
    return result.concat(parlist(ls.slice(1)));
};

console.log("---------------------------------------------------");
console.log("Arrelgo");
console.log(numw);
console.log("Los números pares del arreglo son:");
console.log(parlist(numw));

//Ejercicio 11
//Realiza una función que permita cargar calcular la unión, intersección y diferencia de dos conjuntos dados. 
const conjunto = () => {
    let listax = new Set([31, 42, 62, 54, 35, 70, 56, 90, 80]);
    let listay = new Set([42, 89, 70, 76, 26, 45, 44, 82, 21]);
    console.log("Los Arreglos son: ");
    console.log(listax);
    console.log(listay);
    console.log("***********************************************************************");
    let union = new Set([...listax, ...listay]);
    let interseccion = new Set([...listax].filter(a => listay.has(a)));
    let diferencia = new Set([...listay].filter(a => !listax.has(a)));

    console.log("Union de los numeros");
    console.log(union);
    console.log("Interseccion de los numeros");
    console.log(interseccion);
    console.log("Diferencia de los numeros");
    console.log(diferencia);
}

console.log("---------------------------------------------------");

console.log(conjunto());

//Ejercicio 12
//Realiza una función que permita definir un mapa de datos y permita encontrar un valor a partir de su clave. 
const mapadedatos = x => {
    var miMapa = new Map();
    miMapa.set("clave1", new Array("ALEX", "CANO", 23));
    miMapa.set("clave2", new Array("JOSE", "CANO", 12));
    miMapa.set("clave3", new Array("ALEJANDRO", "CANO", 21));
    var resul = "";
    resul += "Nombre: " + miMapa.get(x)[0] + "\n";
    resul += "Apellido: " + miMapa.get(x)[1] + "\n";
    resul += "Edad: " + miMapa.get(x)[2] + "\n";
    return resul;
}
console.log("---------------------------------------------------");
console.log(mapadedatos("clave3"));
console.log("---------------------------------------------------");