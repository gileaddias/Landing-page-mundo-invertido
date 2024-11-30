
// Seleciona o botão e adiciona um evento de clique
document.getElementById('switch-theme-button').addEventListener('click', switchTheme);

function switchTheme() {
    // Alterna entre as classes 'dark-theme' e 'light-theme' no body
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
}