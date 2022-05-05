// funcion autoinvocada
(()=>{
    const batman:string='Batman';
    const linternaVerde:string="Linterna Verde";
    const volcanNegro:string=`Heroe: Volcan Negro`

    // Al definir el tipo tiene acceso a los metodos de ese metodo
    console.log(batman.toUpperCase())

    console.log(`I'm ${batman}`)

    // null check ?
    console.log(batman[10]?.toUpperCase()|| "No esta presente")

})()