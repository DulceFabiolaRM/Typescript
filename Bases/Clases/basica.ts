(() => {

    class Avenger {
        //private significa que solo se tendrá accceso a esta propiedad dentro de esta clase
        //private name: string;

        //public significa que será vista fuera de la clase
        //public team: string;
        // public realName?: string;

        //estatic: propiedad estática
        static avgAge: number = 35;

        constructor(
            private name: string,
            public team: string,
            public realName?: string,
            avgAge: number = 55
        ) {
            Avenger.avgAge = avgAge
        }

        public bio() {
            return `${this.name}(${this.team})`
        }

    }

    //utilizar la clase
    const antman: Avenger = new Avenger('Antaman', 'Capitan');
    console.log(antman)

    //para tener acceso a la propidad static:
    //hay que hacer uso de la clase, sin crear una nueva instancia
    //se puede acceder a la propiedad haciendo referencia a la clase seguido de la propiedad
    console.log(Avenger.avgAge)


})()

