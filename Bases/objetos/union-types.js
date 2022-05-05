"use strict";
(() => {
    let myCustomeVariable = "Fabiola";
    //Tipo: string
    console.log(typeof myCustomeVariable);
    myCustomeVariable = 20;
    //tipo: number
    console.log(typeof myCustomeVariable);
    myCustomeVariable = {
        name: "Bruce",
        age: 43,
        powers: [1],
    };
    //del tipo hero... no, tipo objeto
    console.log(typeof myCustomeVariable);
})();
