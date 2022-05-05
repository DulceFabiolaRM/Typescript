"use strict";
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    const activarBatiseñal = () => {
        return "Batiseñal activa";
    };
    console.log(typeof activarBatiseñal);
    const heroName = returnName();
})();
