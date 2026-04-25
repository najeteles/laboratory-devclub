let playerScore = 0;
let alexaScore = 0;
let isSpinning = false; // Trava de segurança para evitar múltiplos cliques

const emojiMap = {
    rock: '✊',
    paper: '✋',
    scissors: '✌️'
};

const choices = Object.keys(emojiMap);
const emojiArray = Object.values(emojiMap);

function playGame(playerChoice) {
    if (isSpinning) return; // Impede que o usuário clique enquanto gira
    isSpinning = true;

    const displayPlayer = document.getElementById('display-player');
    const displayAlexa = document.getElementById('display-alexa');
    const waitingDisplay = document.getElementById('waiting-display');
    const statusText = document.getElementById('status-text');

    // 1. Coloca a escolha na área de aguardo e limpa os círculos principais
    waitingDisplay.innerText = emojiMap[playerChoice];
    displayPlayer.innerText = '❓';
    statusText.innerText = "GIRANDO...";
    statusText.style.color = "#00f3ff";

    // 2. Adiciona o efeito visual de Blur e Movimento
    displayPlayer.classList.add('spinning');
    displayAlexa.classList.add('spinning');

    // 3. Efeito de roleta rápida trocando emojis
    let spinInterval = setInterval(() => {
        const random1 = emojiArray[Math.floor(Math.random() * emojiArray.length)];
        const random2 = emojiArray[Math.floor(Math.random() * emojiArray.length)];
        displayPlayer.innerText = random1;
        displayAlexa.innerText = random2;
    }, 100); // Troca a cada 100ms

    // 4. Resolve o resultado após o tempo de Casino (ex: 2.5 segundos)
    setTimeout(() => {
        clearInterval(spinInterval); // Para a roleta
        
        displayPlayer.classList.remove('spinning');
        displayAlexa.classList.remove('spinning');

        // Alexa faz a escolha dela
        const alexaChoice = choices[Math.floor(Math.random() * choices.length)];

        // Move a sua escolha da área de espera para o círculo principal
        displayPlayer.innerText = emojiMap[playerChoice];
        displayAlexa.innerText = emojiMap[alexaChoice];
        
        // Limpa a zona de espera
        waitingDisplay.innerText = '...';

        // Calcula quem ganhou
        determineWinner(playerChoice, alexaChoice, statusText);
        
        isSpinning = false; // Libera os botões novamente
    }, 2500);
}

function determineWinner(player, alexa, statusElement) {
    if (player === alexa) {
        statusElement.innerText = "EMPATE! TENTE NOVAMENTE";
        statusElement.style.color = "#ffff00";
    } else if (
        (player === 'rock' && alexa === 'scissors') ||
        (player === 'paper' && alexa === 'rock') ||
        (player === 'scissors' && alexa === 'paper')
    ) {
        statusElement.innerText = "JACKPOT! VOCÊ GANHOU! 🤑";
        statusElement.style.color = "#00ff00";
        playerScore++;
        document.getElementById('score-player').innerText = playerScore;
    } else {
        statusElement.innerText = "CASA VENCEU! ALEXA GANHOU 🤖";
        statusElement.style.color = "#ff0055";
        alexaScore++;
        document.getElementById('score-alexa').innerText = alexaScore;
    }
}