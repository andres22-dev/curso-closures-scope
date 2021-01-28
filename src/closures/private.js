const person = () => {

    var saveName = "Name";
    //utilizamos un return para retornar un objeto y creamos el atributo getname
    // el cual utilizamos con una funcion que retornara nuestra variable saveName
    return{

        getName: () =>{

            return saveName;

        },
//creamos  un nuevo atributo al cual le agregamos una funcion la cual recibe el
// parametro nombre
        setName:(name) =>{

            saveName = name;

        },

    };

};
//asigamos la funcion a una variable
let newPerson = person()
// imprimimos la variable junto con la funcion getname establecida en la funcion
console.log(newPerson.getName()) //Name valor que se encuentra almacenada en var saveName
// utilizamos newPerson con la funcion setName
newPerson.setName('andres'); // Le asignamos un nuevo valor con el setname
// Imprimimos la funcion junto con el get name
console.log(newPerson.getName())

//No podremos cambiar desde otro lado de la aplicacion si no que tendremos
// Que disponer de los metodos creados para disponer de estas asignaciones
// De esta forma estamos creando un valor privado

