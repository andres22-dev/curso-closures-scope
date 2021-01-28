//Scope Local en funciones
const helloWorld = () =>{

    const hello = 'string :)';
    //Accedemos desde dentro a nuestra variable
    console.log(hello);


}

helloWorld();
//Si accedieramos a la variable que esta en la funcion no podriamos
// Ya que esta definida solo en ese contexto
console.log(hello); // nos dice que no esta definida


//Ambito lexico 
/* La funcion tiene acceso a la variable de local y es la asignacion sobre la cual
   va a trabajar entonces al momento de hacer return de esa variable no toma en
   cuenta la del global si no la del local
   Y tambien al imprimir la variable de Global no se reasignara ya que la reasignacion
   esta dentro de la funcion, entonces quedara con el primer valor que le asignamos
   al momento de imprimir

*/
// Lo que hacemos es definir una variable con el mismo nombre en Global y local
// Dentro de la funcion reasignamos su valor 
// Luego se retorna dentro de otra funcion esa variable

 var scope = "i am global"

 const functionScope = () =>{

    var scope = 'i am just a local';
    const func = () =>{

        return scope
    }
    console.log(func());
 }
