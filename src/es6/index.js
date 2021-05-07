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


