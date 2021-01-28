//Declaramos una funcion para realizar una alcancia

const moneyBox = (coins) => {

    var saveCoins = 0;
    saveCoins += coins;
    console.log(`Money Box: $${saveCoins}`);

}

moneyBox(5); //Money Box: $5
moneyBox(10); //Money Box: $10

// MoneyBox con la estructura de un closure

const moneyBox2 = () => {

    var saveCoins = 0;
    
    const countCoins = (coins) =>{

        saveCoins+= coins;
        console.log(saveCoins)
    }

    return countCoins; // HACEMOS REFERENCIA A LA FUNCION PARA OBTENER SU VALOR

}

let myMoneyBox = moneyBox2();

myMoneyBox(10); // 10
myMoneyBox(14);  // recordara el valor de la asignacion anterior -> muestra 24
                 // porque quda en memoria
myMoneyBox(20);  // 34