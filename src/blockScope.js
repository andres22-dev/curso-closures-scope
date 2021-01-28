//Bloque de codigo es aquel que esta establecido dentro de unas llaves {}

const fruit = () => {

    if(true){

        var fruits = 'apple';
        var fruits2 = 'banana';
        var fruits3 = 'kiwi';

    }

    //vamos a acceder a las variables del if fuera del bloque del if
    console.log(fruits,fruits2,fruits3); // apple banana kiwi

    //---Cuando definimos variables en un bloque distinto con var

    /* Podre acceder a las variables sin problema alguno y podremos accederlos
       Ya que estan establecido dentro del scope de la funcion y esto significa
       El que podamos accederlos en cualquier parte del scope de la funcion */

    // Con let y const

    // No podremos acceder a ellas si estan establecidas con let y const
    // Porque ellas se establecen dentro del bloque en el que estan y solo
    // podran ser accedidas dentro de ese bloque
}

fruit()

let x = 1;

{

    let x = 2;
    console.log(x); //2
}

    console.log(x); //1

//Mismo ejemplo con var 

var x = 1;

{
//Lo que sucede aqui es que el valor reasignado a x tambien cambio en la variable global
// Si queremos declarar un valor debemos hacerlo con let para que este valor
  // trabaje solo en el scope de ese bloque 
    var x = 2;
    console.log(x); //2
}

    console.log(x); //2

const anotherFunction = () => {


    for(let i = 0; i < 10; i++){

        setTimeout(()=>{

            console.log(i);
        }, 1000)


    }
}

anotherFunction(); // al  imprimir la variable i que esta declarada con var
                    // IMPRIME 10 LAS 10 VECES
// Nos muestra este valor ya que esta accediendo al ultimo valor que recorre 
// El for

// La solucion es asignando la variable i con let