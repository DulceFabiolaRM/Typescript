"use strict";
(() => {
    //Argumentos opcionales
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "----"}`;
    };
    const name = fullName("Tony", "Stark");
    console.log(name);
})();