(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Jr",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500,
  };

  const { poder, vision } = avengers;
  console.log(poder.toFixed(2), vision.toUpperCase());

  //Destructurar argumentos (avengers: Avengers)
  //ironmas y el resto de las propiedades
  const printAvenger = ({ ironman, ...resto }: Avengers) => {
    console.log(resto);
  };

  printAvenger(avengers);

  //Destructuracion de arreglos
  //const avengersArr = ["Cap. America", "Ironman", "Hulk"];

  //cambiando un poquito el arr a una tupla:
  const avengersArr: [string, boolean, number] = ["Cap. America", true, 150.15];

  //Asigna la segunda posicion
  //const ironman = avengersArr[1];
  // console.log({ironman})

  //no esta mal pero....puede mejorar
  //destructuro con coma y corchetes porque es arreglo
  //A diferencia de los objetos puedes ponerle el nombre que quieras, lo q importa es la posicion del elemento
  const [capitan, ironman] = avengersArr;
  console.log({ capitan, ironman });
})();
