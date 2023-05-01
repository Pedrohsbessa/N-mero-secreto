
function verificaValor(valor) {
    //Ao tentar adicionar o valor o JS tenta converter para número
    const número = +valor

    if (verificaValidade(número)) {
        elementoChute.innerHTML += `<div>Valor Inválido <br/></div>`
        return
    }

    if (verificaTamanho(número)) {
        elementoChute.innerHTML += `<div>valor inválido fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (número === númeroSecreto) {
        document.body.innerHTML = `
        <h2> VACÊ ACERTOU</h2>
        <h3> O número secreto é ${número}</h3>
        <button id = "botão-reiniciar" class = "botão__reiniciar">Reiniciar</button>
    `
        efeitos();
        reiniciar();

    } else if (número < númeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up" style="color: #a252b8;"></i></div>`
    } else if (número > númeroSecreto) {
        elementoChute.innerHTML += `<div> O número secreto é menor <i class="fa-solid fa-arrow-down" style="color: #a252b8;"></i></div>`
    }


}
function verificaValidade(número) {
    return Number.isNaN(número)
}

function verificaTamanho(número) {
    return número > maiorValor || número < menorValor
}

function reiniciar() {
    const btn = document.querySelector('#botão-reiniciar');
    btn.addEventListener('click', () => {
        location.reload();
    })
}