(() => {
  //typo personalizado
  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  };

  let myCustomeVariable: string | number | Hero = "Fabiola";
  //Tipo: string
  console.log(typeof myCustomeVariable);

  myCustomeVariable = 20;
  //tipo: number
  console.log(typeof myCustomeVariable);

  myCustomeVariable = {
    name: "Bruce",
    age: 43,
    powers: [1],
  };
  //del tipo hero... no, tipo objeto
  console.log(typeof myCustomeVariable);
})();
