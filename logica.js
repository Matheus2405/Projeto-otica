var A = document.querySelector('#A');
var P = document.querySelector('#P');
var D = document.querySelector('#D');
var Dnp = document.querySelector('#Dnp');
var diametro = document.querySelector('#resultado'); // Usei o ID "resultado" como referência

function equacao() {
    // Pegando os valores e convertendo-os para números
    var aro = parseFloat(A.value);
    var ponte = parseFloat(P.value);
    var diagonal = parseFloat(D.value);
    var distanciaNasoPupilar = parseFloat(Dnp.value);

    // Calculando o resultado da equação
    var resultado = (ponte + aro) - (2 * distanciaNasoPupilar) + diagonal;

    // Exibindo o resultado no span
diametro.innerHTML=resultado;
}
