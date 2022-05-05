(()=>{
let avenger:any=123;
//Una contante debe de estar inicializada
//const exists;
let exists;

let power; 

avenger='Dr. STrange';
console.log(avenger.charAt(0))

//Casteo tratalo como una string, asi que tiene acceso a todos los metodos de strings
console.log((avenger as string).charAt(0))

//Otra forma de casteo
console.log((<number>avenger).toFixed(2))

avenger=150.2325433;

console.log(avenger.toFixed(2))

})()