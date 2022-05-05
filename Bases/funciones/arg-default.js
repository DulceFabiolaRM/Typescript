"use strict";
(() => {
    //Argumentos por defecto
    //upper:boolean=false
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || "----"}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || "----"}`;
        }
    };
    const name = fullName("Tony", "Stark", true);
    console.log({ name });
})();
