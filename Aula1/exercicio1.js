// 1. Crie uma página com um botão "Clique aqui". 
// A cada clique, exiba quantas vezes o botão foi clicado. 
// Quando atingir 10 cliques, exiba a mensagem “Chega, né?”


let clickCount = 0;
const button = document.createElement('button');
button.textContent = 'Clique aqui';
document.body.appendChild(button);
button.addEventListener('click', () => {
    clickCount++;
    if (clickCount < 10) {
        alert(`Você clicou ${clickCount} vezes.`);
    } else {
        alert('Chega, né?');
        button.disabled = true; // Desabilita o botão após 10 cliques
    }
});[]