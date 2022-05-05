//Una forma de encapsular codigo, ya que no hay modulos
// y pueden chocar las funciones, es wuna forma de
(()=>{
const numbers:number[]=[1,2,3,4,5,6,7,8,9,10]
//Indica el tiempo de datos que puede aceptar
// const numbers:(string | number | boolean)[]=[1,2,3,4,5,"6",7,8,9,10]
// numbers.push(11)
// numbers.push(true)

const villians=['Ómega Rojo', 'Dormammu','Duende Verde']
villians.forEach(v=> console.log(v.toUpperCase()))
console.log(numbers)
})()