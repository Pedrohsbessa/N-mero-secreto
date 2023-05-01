window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const elementoChute = document.querySelector('#chute');

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    const valorDito = e.results[0][0].transcript
    exibeChute(valorDito)
    verificaValor(valorDito)
}

function exibeChute(valorDito) {
    elementoChute.innerHTML = `<div>Você disse:</div>
    <span class="box">${valorDito}</span>`
}

recognition.addEventListener('end', ()=>{recognition.start()
})