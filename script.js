document.querySelector('.botao').addEventListener('click', function() {
    var audio = new Audio('assets/audio/campainha.mp3');
    audio.play();
});
  


document.getElementById('botaoFalar').addEventListener('click', function() {
    var texto = document.getElementById('textoParaFala').value;
    falarTexto(texto);
});

function falarTexto(texto) {
    // Verifica se o navegador suporta a API de síntese de fala
    if ('speechSynthesis' in window) {
        botaoFalar.classList.add('botao-pressionado'); // Adiciona a classe ao botão

        // Cria um novo objeto de síntese de fala
        var synth = window.speechSynthesis;

        // Cria um novo objeto de fala com o texto fornecido
        var utterance = new SpeechSynthesisUtterance(texto);

        // Cria um novo elemento de áudio para reproduzir o som da campainha
        var audio = new Audio('assets/audio/campainha.mp3');
        audio.play();

        // Define um tempo de espera para aguardar a conclusão da reprodução do som da campainha
        setTimeout(function() {
            // Inicia a síntese de fala após a reprodução do som da campainha
            synth.speak(utterance);

            // Remove a classe do botão após a síntese de fala
            setTimeout(function() {
                botaoFalar.classList.remove('botao-pressionado');
            }, 3000); // Tempo de espera de 3 segundos após a síntese de fala
        }, 3000); // Tempo de espera de 3 segundos para a reprodução do som da campainha

    } else {
        // Se a API de síntese de fala não for suportada, exibe uma mensagem de erro
        alert('Desculpe, a síntese de fala não é suportada neste navegador.');
    }
}

document.getElementById('textoParaFala').addEventListener('keypress', function(event) {
    // Verifica se a tecla pressionada é a tecla Enter (código 13)
    if (event.key === 'Enter') {
        // Evita o comportamento padrão de enviar formulários ao pressionar Enter
        event.preventDefault();
        
        // Obtém o texto do campo de texto
        var texto = this.value;
        
        // Chama a função para falar o texto
        falarTexto(texto);
    }
});
