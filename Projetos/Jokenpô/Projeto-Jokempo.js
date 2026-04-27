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

// Cache dos elementos do DOM (Melhor performance)
const displayPlayer = document.getElementById('display-player');
const displayAlexa = document.getElementById('display-alexa');
const waitingDisplay = document.getElementById('waiting-display');
const statusText = document.getElementById('status-text');
const scorePlayerText = document.getElementById('score-player');
const scoreAlexaText = document.getElementById('score-alexa');

// ============================================================
// MOTOR DE ÁUDIO MYSERV
// ============================================================
const audio = {
    bg: new Audio('assets/synthwave-retro-music.mp3'),
    spin: new Audio('assets/slot-machine-payout.mp3'),
    win: new Audio('assets/money-counting-machine.mp3'),
    lose: new Audio('assets/game-over.mp3'), 
    draw: new Audio('assets/simple-whoosh.mp3')
};

// Configurações Iniciais
audio.bg.loop = true;
audio.bg.volume = 0.05; // Volume de fundo bem suave (5%)
audio.spin.loop = true; // Catraca tocando em loop
audio.spin.volume = 0.5;

let isMuted = false;
let bgmStarted = false;

// Libera a música de fundo no 1º clique (Workaround de Autoplay do Chrome)
document.body.addEventListener('click', () => {
    if (!bgmStarted && !isMuted) {
        audio.bg.play().catch(err => console.log("Aguardando interação:", err));
        bgmStarted = true;
    }
}, { once: true }); // O { once: true } mata o listener após o 1º uso!

// Lógica do Botão de Mute
const muteBtn = document.getElementById('mute-btn');
muteBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Impede que esse clique dispare o som de fundo duplicado
    isMuted = !isMuted;
    
    if (isMuted) {
        audio.bg.pause();
        audio.spin.pause(); // Trava a catraca se mutar girando
        muteBtn.textContent = '🔈'; // Muda o emoji
    } else {
        audio.bg.play();
        muteBtn.textContent = '🔊';
        bgmStarted = true;
    }
});

// Função Sênior para Disparo de Efeitos (Garante que o som sempre rebobine)
function playSFX(sound) {
    if (!isMuted) {
        sound.currentTime = 0; 
        sound.play().catch(err => console.log(err));
    }
}

// ============================================================
// MOTOR PRINCIPAL BLINDADO (VISUAL + ÁUDIO)
// ============================================================
function playGame(playerChoice) {
    if (isSpinning) return; 
    isSpinning = true;

    // 1. Liga o áudio da roleta 
    if (!isMuted) audio.spin.play();

    // 2. Coloca a escolha na área de aguardo e limpa os círculos principais
    waitingDisplay.innerText = emojiMap[playerChoice];
    displayPlayer.innerText = '❓';
    statusText.innerText = "GIRANDO...";
    statusText.style.color = "#00f3ff";

    // 3. Adiciona o efeito visual de Blur e Movimento
    displayPlayer.classList.add('spinning');
    displayAlexa.classList.add('spinning');
    
    // 4. Efeito de roleta rápida trocando emojis
    let spinInterval = setInterval(() => {
        const random1 = emojiArray[Math.floor(Math.random() * emojiArray.length)];
        const random2 = emojiArray[Math.floor(Math.random() * emojiArray.length)];
        displayPlayer.innerText = random1;
        displayAlexa.innerText = random2;
    }, 100); 

    // 5. Resolve o resultado após o tempo de Casino (2.5 segundos)
    setTimeout(() => {
        clearInterval(spinInterval);
        
        // Desliga a roleta e rebobina a fita
        audio.spin.pause();
        audio.spin.currentTime = 0; 

        // Remove o blur
        displayPlayer.classList.remove('spinning');
        displayAlexa.classList.remove('spinning');

        // Sorteia a jogada real da Alexa
        const alexaChoice = choices[Math.floor(Math.random() * choices.length)];

        // Move a sua escolha da área de espera para o círculo principal e revela a Alexa
        displayPlayer.innerText = emojiMap[playerChoice];
        displayAlexa.innerText = emojiMap[alexaChoice];
        
        // Limpa a zona de espera
        waitingDisplay.innerText = '...';

        // 6. Executa a checagem e pega o resultado final
        const winner = determineWinner(playerChoice, alexaChoice, statusText);

        // 7. Lógica limpa do Áudio Final baseada no que a função retornou
        if (winner === 'player') {
            playSFX(audio.win); // Toca a máquina de contar dinheiro
        } else if (winner === 'alexa') {
            playSFX(audio.lose); // Toca o Game Over
        } else if (winner === 'draw') {
            playSFX(audio.draw); // Toca o Whoosh
        }

        isSpinning = false; // Libera a máquina
    }, 2500);
}

// === NOVA FUNÇÃO COM RETORNO DE ESTADO ===
function determineWinner(player, alexa, statusElement) {
    if (player === alexa) {
        statusElement.innerText = "EMPATE! TENTE NOVAMENTE";
        statusElement.style.color = "#ffff00";
        return 'draw'; 
    } else if (
        (player === 'rock' && alexa === 'scissors') ||
        (player === 'paper' && alexa === 'rock') ||
        (player === 'scissors' && alexa === 'paper')
    ) {
        statusElement.innerText = "JACKPOT! VOCÊ GANHOU! 🤑";
        statusElement.style.color = "#00ff00";
        playerScore++;
        scorePlayerText.innerText = playerScore;
        return 'player'; 
    } else {
        statusElement.innerText = "CASA VENCEU! ALEXA GANHOU 🤖";
        statusElement.style.color = "#ff0055";
        alexaScore++;
        scoreAlexaText.innerText = alexaScore;
        return 'alexa'; 
    }
}