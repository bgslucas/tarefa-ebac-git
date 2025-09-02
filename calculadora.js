
function calcularImc(){

    /* iniciar o código com os campos zerados */

    document.getElementById("resultadoImc").textContent = "";
    document.getElementById("resultadoClassificacao").textContent = "";

    let altura = document.getElementById("altura").value;
    let peso = document.getElementById ("peso").value;

    let imc = peso / (altura * altura);


    document.getElementById("resultadoImc").textContent = "O seu IMC é " + imc.toFixed(1);

    if (imc <= 18.5) document.getElementById("resultadoClassificacao").textContent = "Sua Classificação é: Magreza"; 

    else if (imc >= 18.6 && imc <= 24.9) document.getElementById("resultadoClassificacao").textContent = "Sua Classificação é: Normal";

    else if (imc >= 25.1 && imc <= 29.9) document.getElementById("resultadoClassificacao").textContent = "Sua Classificação é: Sobrepeso";

    else if (imc >= 30 && imc <= 39.9) document.getElementById("resultadoClassificacao").textContent = "Sua Classificação é: Obesidade";

    else if (imc >= 40) document.getElementById("resultadoClassificacao").textContent = "Sua Classificação é: Obesidade Grave";

    else document.getElementById("resultadoClassificacao").textContent = "Digite um valor válido";

    /*Limpar os campos ao final */
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";
}

    