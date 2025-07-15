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

function tabuada() {
    let n1 = Number(document.getElementById("num7_1").value);
    let resultado = "";

    for (let i = 0; i <= 10; i++) {
        resultado += `${n1} x ${i} = ${n1 * i}\n`;
    }

    document.getElementById("resultado7").innerText = resultado;
}

function contador() {
      let numero = 1;
      let resultado = "";

      const intervalo = setInterval(() => {
        resultado += numero + "\n";
        document.getElementById("resultado8").innerText = resultado;
        numero++;

        if (numero > 10) {
          clearInterval(intervalo);
        }
      }, 1000);
}


function calcularMedia() {
    let n1 = Number(document.getElementById("num9_1").value);
    let n2 = Number(document.getElementById("num9_2").value);
    let n3 = Number(document.getElementById("num9_3").value);


    let calcularMedia = ((n1 + n2 + n3) / 3).toFixed(2);

    let resultado = n1 >= 6 ? "Aprovado" : "Repovado"


    document.getElementById("resultado9").innerText = resultado + "\nMedia: " + calcularMedia;
}

function conversorTemperatura() {
    let celsius = Number(document.getElementById("num10_1").value);
    let resultadoConversao = (celsius * 9/5) + 32;

    document.getElementById("resultado10").innerText = "Fahrenheit (°F): " + resultadoConversao;
}

function verificarSemana() {
    let num = Number(document.getElementById("numDia").value)
    const diaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];

    if(!isNaN(num)) {
        document.getElementById("resultado11").innerText = "Número invalido";
    }

    if(num <= 7 && num >=1) {
        for(let i = 1; i <= 7; i++) {
            if(num == i) {
                document.getElementById("resultado11").innerText = diaSemana[i-1];
            }
        }
    } else {
        document.getElementById("resultado11").innerText = "Numero invalido";
    }
}

function verificarSenha() {
    let numComparativo = 1234;
    let num = Number(document.getElementById("senha").value);

    if(num === numComparativo) {
        document.getElementById("resultado12").innerText = "Acesso permitido";
    } else {
        document.getElementById("resultado12").innerText = "Senha Incorreta";
    }
}

function contadorRegressivo() {
    let numero = 10
    let resultado = "";
    
    const intervalo = setInterval(() => {
        resultado += numero + "\n"
        document.getElementById("resultado13").innerText = resultado;
        numero--;

        if (numero < 1) {
            clearInterval(intervalo);
        }
    }, 1000);
    
}