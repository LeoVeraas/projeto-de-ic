// Obtém o botão e o corpo do documento
const botaoModo = document.getElementById('modo-toggle');
const body = document.body;

// Função para alternar entre os modos
botaoModo.addEventListener('click', function() {
    // Alterna a classe 'modo-escuro' no corpo da página
    body.classList.toggle('modo-escuro');

    // Altera o texto do botão com base no estado atual
    if (body.classList.contains('modo-escuro')) {
        botaoModo.textContent = 'Ativar Modo Claro'; // Modo escuro ativado
    } else {
        botaoModo.textContent = 'Ativar Modo Escuro'; // Modo claro ativado
    }
});