(()=>{
    const hero:string="Flash"

    function returnName():string{
        return hero
    }

    const activarBatiseñal=():string=>{
        return "Batiseñal activa";
    }
 
    console.log(typeof activarBatiseñal)

    const heroName=returnName()
})()