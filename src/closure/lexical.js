const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal)

    function parent() { //Función interna
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal)
        }
        return child()
    }
    return parent()
}

myFunction()

//Practicing
var saveCoins = 0;
const moneyBox = (coins) => {
    saveCoins += coins; 
    console.log(saveCoins);
}

moneyBox(2)
moneyBox(80)
moneyBox(3)

//Example 2
const myMoneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(saveCoins);
    }
    return countCoins;
} 

let moneyBoxx = myMoneyBox()
moneyBoxx(2)
moneyBoxx(2)
moneyBoxx(2)


