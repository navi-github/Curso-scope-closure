//Variables

var a; //Declarando la variable
var b = 'b'; //Declaramos / asignamos (inicializamos)
b = 'bb'; //Reasignamos el valor
var a = 'aa'; //Redeclaración

//Global Scope

var fruit = 'Apple'; //Global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

//Segundo ejemplo
function countries() {
    country = 'Colombia'; //Asignamos como global
    console.log((country))
}

countries();
console.log(country)