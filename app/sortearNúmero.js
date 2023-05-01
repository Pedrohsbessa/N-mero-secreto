const menorValor = 1;
const maiorValor = 1000;
const elementoMenor = document.querySelector("#menor-valor").innerHTML = menorValor
const elementoMaior = document.querySelector("#maior-valor").innerHTML = maiorValor

const númeroSecreto = geradorNúmero();

function geradorNúmero() {
    return Math.floor(Math.random() * maiorValor);
}
console.log(númeroSecreto)

