let num1 = Number(prompt("1. Digite o primeiro numero: "));

let num2 = Number(prompt("2. Digite o sugundo numero: "));

alert("Rusultado da soma: " + (num1+num2));



var global = "variavel global";
console.log(global);


function exemplo2() {
    var local = "variavel local";
    console.log(local);
}
exemplo2();
// console.log(local);

let x = 10;
if(x > 5) {
    let y = 25;
    console.log("valor de y : ", y);
}
// console.log(x);
// console.log(y);

const _constante = "text";
_constante = "Outro texto";
console.log(_constante);

function saudacao() {
    alert("Bem-Vindo ao nosso site 3");
}