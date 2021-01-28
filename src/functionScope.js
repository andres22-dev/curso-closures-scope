
const fruits = () =>{

    var fruit = 'apple';
    console.log(fruit);



};


fruits();
// si accedemos a esa variable que no esta definida en global si no en local
console.log(fruit); //saldra error diciendo que la variable no esta definida

//declaramos una funcion para trabar scope local
const anotheFuction = () =>{

    var x = 1;
    var x = 2;
    let y = 1;
    let y = 2
    console.log(x, y);

}

anotheFuction();

// al ejecutar nos dara error y nos dice que no podemos reasignar algo
// que ya esta asignado
// Este error solo pasa con const y let ya que no las podemos declarar
// y asinarle un valor distinto del que ya estaba asignado