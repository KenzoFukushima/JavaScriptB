// 1 - Soma simples

function somar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    document.getElementById("resultado1").innerText = "Resultado: " + (n1 + n2);
}

function verificar(){
    let idade = Number(document.getElementById("idade").value);

    if(idade <= 18){
        document.getElementById("resultado2").innerText = "menor idade";
    } else {
        document.getElementById("resultado2").innerText = "maior idade";
    }
}

function contadorLetra(){
    let texto = document.getElementById("texto").value;
    let totalCaracter = texto.length;

    document.getElementById("resultado3").innerText = "Total de caracteres: " + totalCaracter;
}

function verificarParImpar() {
    let num = Number(document.getElementById("numParImpar").value);

    if(num % 2 == 0) {
        document.getElementById("resultado4").innerText = "É Par";
    } else {
        document.getElementById("resultado4").innerText = "É Impar";
    }
}

function convercaoMaiuscula() {
    let text = document.getElementById("textAlta").value;
    let textoConvertido = text.toUpperCase();

    document.getElementById("resultado5").innerText = "Convertido: " + textoConvertido;
}

function verificarMaior() {
    let n1 = Number(document.getElementById("num6_1").value);
    let n2 = Number(document.getElementById("num6_2").value);

    if(n1 > n2) {
        document.getElementById("resultado6").innerText = "Maior: " + n1;
    } else if(n2 > n1) {
        document.getElementById("resultado6").innerText = "Maior: " + n2;
    } else {
        document.getElementById("resultado6").innerText = "São iguais";
    }
}