const botaoModo = document.getElementById('modo-toggle');
const body = document.body;


botaoModo.addEventListener('click', function() {

    body.classList.toggle('modo-escuro');


    if (body.classList.contains('modo-escuro')) {
        botaoModo.textContent = 'Ativar Modo Claro';
    } else {
        botaoModo.textContent = 'Ativar Modo Escuro';
    }
});