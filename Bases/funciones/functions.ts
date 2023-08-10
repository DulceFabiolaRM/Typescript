(()=>{
    const hero:string="Flash"

    function returnName():string{
        return hero
    }

    const activarBS=():string=>{
        return "Batiseñal activa";
    }
 
    console.log(typeof activarBS)

    const heroName=returnName()
})()