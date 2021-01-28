
/* 
    Scope es el alcance de las variables que estamos asignando

   Cuando establecemos una variable con var podremos acceder a ella desde cualquier
   Punto de la aplicacion porque esta asignada Globalmente
   
   
   */
var hello = "hello";


console.log(hello);




let world = "Hello World";
const helloWorld = 'Hello world';


//Creamos una funcion para acceder a las variables
// Podremos acceder a ellas en la funcion ya que estan definidas en Scope Global
const anotherFunction = () => {

    console.log(hello);
    console.log(world);
    console.log(helloWorld);

}
anotherFunction();

//Podremos reagsinar el valor de una variable solo con let o var

hello = "otra cosa";
world = "cambio xd";


console.log(hello);
console.log(world);

/*
    Es una mala práctica crear una variable sin las palabras reservadas: 
    var, let y const.
    Si se asigna una variable dentro de una función sin las palabras 
    reservadas será una variable global.
*/

const helloWorld = () => {

    globalVar = 'im global'

}

helloWorld();
console.log(globalVar); // podremos acceder a la variable

//Doble asignacion de una variable es mala practica

const anotherFunction = () => {

    var localVar = globalVar = 'Im Global'


}