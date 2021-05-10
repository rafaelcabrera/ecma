function newFunction (name = "rafa", age = 30, country = "Arg"){
    console.log(name, age, country)
};
newFunction();
newFunction("GABI", 24, "ARG");

//ecma template string , concatenar.

let hello = "hello";
let world = "world";
let epicPhrase = hello + " no ecma " + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} si es ecma ${world}`
console.log(epicPhrase2);

//multilinea
let lorem = `frase
epica con enter
asas das as`
console.log(lorem);

//repasar destructuracion (?)

let array1 = [1 , 2, 3];
let array2 = [4,5,6,];

let spreadoperator = ['todo spredeado', ...array1, ...array2];
console.log(spreadoperator);

// Objetos en ecma6

var nombre = 'Rafa';
var edad = '30';

let obj = {
    'name': nombre , 
    'age': edad
};
console.log(` ${obj}`);
let obj2 = {nombre , edad}
console.log(obj2);
// por que cuando imprimo ${obj} no me lo imprime



/* Arrow Functions */
const names  = [{name: 'Rafa', age: 30 },
                {name: 'Alejandro', age: 20}
            ]


let listOfNames = names.map(function(item){ // de esta forma estabamos pasando una funcion anonima
    console.log(item.name)
}) 

let listOfNames2 = names.map(item => console.log(item.name));


// const listOfNames3 = (name , ages , country ) => {...}

const listOfNames4 = name => {}

const square = num => num*num; //no return ni bloque de llaves

/* Promesas, algo va a pasar */

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Bien ahí')
        } else {
            reject('Ups!');
        }
    });
}
 // como ejecutamos?

helloPromise()
.then(response => console.log(response))
// .then (() => console.log('hola'))
.catch (error => console.log(error));

/* CLASES MODULOS Y GENERADORES */

class calculator {
    constructor(){
        this.valueA = 0;  //variables dentro de mi scope global
        this.valueB = 0;

    }
    sum(valueA , valueB) { //esto es mi metodo
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

//asi lo utilizo

const calc = new calculator()
console.log(calc.sum(2,2));

/* import y export: Trabajar con módulos */

//creo module.js

import  hello  from './module.js';
hello(); // no me corre

/* Generators funcion que retorna segun algoritmo*/

function* helloWorld() {
    if (true){
        yield 'Hello, '; //guarda estado en interna
    }
    if (true){
        yield 'World'; //guarda estado en interna
    }
};

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
//fibonacci con generators para entender bien

/* Async await */
/* En esta clase se trabajó Async y await, en el que se usan funciones y promesas para poder ver su comportamiento. Estas permiten ser más claro al crear funciones y trabaja mejor con el asincronismo */

const helloWorld =() =>{
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=>resolve('helloWorld'),3000)
        : reject(new Error ('Test Error'))
    })
}

const helloAsync =async() =>{
    const hello = await helloWorld();
    console.log(hello);

}
helloAsync();

//Nos permitirá usar trycatch y trabajar los errores correctamente.

const another =async() =>{
    try{
        const hello = await helloWorld();
        console.log(hello);

    } catch (error){
        console.log(error);
        
    }
}

another();

// UN EJEMPLO DE ASYNC AWAIT

//  const delay = () => {
//     return new Promise(
//         resolve => setTimeout(resolve, 1000)
//     )
// };
// const counter = async() => {
//     await delay();
//     console.log('one second')
//     await delay();
//     console.log('two seconds')
//     await delay();
//     console.log('three seconds')
//     await delay();
//     console.log('four seconds')
//     await delay();
//     console.log('five seconds')
// };
// counter();