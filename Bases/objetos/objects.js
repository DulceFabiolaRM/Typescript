"use strict";
(() => {
    //Tipo de objeto
    // ? indica q sea opcional 
    //getName es una funcion q es opcional y devuelve un string
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    flash = {
        name: 'Clark Kent',
        // age:60,
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        }
    };
})();
