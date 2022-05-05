"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;
    // let myFunction:Function;
    // myFunction=10
    // console.log(myFunction)
    //No se esta ejecutando, se esta mandando la referencia
    //Typescript esta infiriendo el tipo de función 
    //let myFunction: (a: number, b: number) => number
    // myFunction=addNumber
    // console.log(myFunction(1,2))
    // myFunction=greet
    // console.log(myFunction('Fabiola'))
    // myFunction=saveTheWorld
    // console.log(myFunction())
    //Acepta las 3 funciones, porque no tiene firma inicial, acepta todo
    //Pero si se define el tiepo cambia, solo aceptara un tipo, 
    //para eso en la declaracion de la funcion eliminamos la palalabra reservada Function 
    //y agregamos tipo de argumentos (si existen) y tipo de retorno
    //*Funcion con dos paramteros de tipo number que regresa un numero
    //* let myFunction:(y:number, z:number)=>number;
    //* myFunction=addNumber
    //* console.log(myFunction(1,2))
    //*  myFunction=addNumber
    //?Funcion con un parametro tipo string que retorna un string
    //? let myFunction:(y:string)=>string;
    //? myFunction=greet
    //? console.log(myFunction('Fabiola'))
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
