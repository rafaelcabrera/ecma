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





