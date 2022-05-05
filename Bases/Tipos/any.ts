(() => {
  let avenger: any = 123;
  //Una contante debe de estar inicializada
  //const exists;
  let exists;

  let power;

  avenger = "Dr. STrange";
  console.log(avenger.charAt(0));

  //Casteo tratalo como una string, asi que tiene acceso a todos los metodos de strings
  console.log((avenger as string).charAt(0));

  //Otra forma de casteo
  avenger = 150.23256415;
  console.log(<number>avenger.toFixed(2));

  console.log(exists);
  console.log(power);
})();
