(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress(id: string): string;
    }
    //separar por interfaces para no anidar
    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Fabiola',
        age: 25,
        address: {
            id: 125,
            zip: 'MEX',
            city: 'Mexico'
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    }

    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'K2S U2A'
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    }




})()