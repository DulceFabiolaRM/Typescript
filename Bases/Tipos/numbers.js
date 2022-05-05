"use strict";
(() => {
    let avengers = 10;
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos ');
    }
    avengers = Number('555a');
    // {avengers: NaN} Es considerado como un numero 
    console.log({ avengers });
})();
