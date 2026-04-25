let startTime;
let elapsedTime = 0;
let lastLapTime = 0; // Nova variável para rastrear o ponto de corte da última volta
let timerInterval;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const lapBtn = document.getElementById('lapBtn');
const lapsList = document.getElementById('lapsList');

// Formatador de tempo (Helper)
function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}<span class="ms">.${formattedMS}</span>`;
}

// Ações Principais
function print(txt) {
    display.innerHTML = txt;
}

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10); // 10ms para precisão de centésimos
    
    toggleButtons(true);
}

function pauseTimer() {
    clearInterval(timerInterval);
    toggleButtons(false);
}

function resetTimer() {
    clearInterval(timerInterval);
    print("00:00<span class='ms'>.00</span>");
    elapsedTime = 0;
    lastLapTime = 0; // Reset do diferencial
    lapsList.innerHTML = "";
    toggleButtons(false);
}

function recordLap() {
    // 1. CALCULAR O DIFERENCIAL (O tempo gasto apenas nesta volta)
    const currentLapDuration = elapsedTime - lastLapTime;
    
    // 2. ATUALIZAR O MARCADOR (Para que a próxima volta comece do zero)
    lastLapTime = elapsedTime;

    // 3. FORMATAR O TEMPO (Usando a variável correta que acabamos de calcular)
    const lapTimeFormatted = timeToString(currentLapDuration);
    
    // 4. CRIAR O ELEMENTO NA LISTA
    const li = document.createElement("li");
    li.classList.add("lap-item");
    
    // Corrigido aqui: Usando lapTimeFormatted dentro do template string
    li.innerHTML = `VOLTA ${lapsList.children.length + 1} <span>${lapTimeFormatted}</span>`;
    
    lapsList.prepend(li);
}

// Gerenciador de estado da UI
function toggleButtons(isRunning) {
    startBtn.disabled = isRunning;
    pauseBtn.disabled = !isRunning;
    lapBtn.disabled = !isRunning;
}