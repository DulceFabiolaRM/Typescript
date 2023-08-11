(() => {
    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ) {
            console.log('COnstructor Avenger llamado')
        }

        private getFullname() {
            return `${this.name}${this.realName}`
        }


    }

    class Xmen extends Avenger {

    }
    const wolverine = new Xmen('Wolverine', 'Logan')
    console.log(wolverine)
})()