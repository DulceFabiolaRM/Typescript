"use strict";
// funcion autoinvocada
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Heroe: Volcan Negro`;
    // Al definir el tipo tiene acceso a los metodos de ese metodo
    console.log(batman.toUpperCase());
    console.log(`I'm ${batman}`);
    // null check ?
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No esta presente");
})();
