const canvas = document.getElementById('canvasWormhole');
const ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// 1. Configuração do Túnel
const particles = [];
for (let i = 0; i < 600; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * 0.5 + 0.5; 
    particles.push({
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        z: Math.random(),
        color: '#ffffff'
    });
}

// 2. Animação do Fundo
function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'; // Rastro de movimento corrigido
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    particles.forEach(p => {
        p.z -= 0.005;
        if (p.z <= 0) p.z = 1;

        const x = cx + (p.x / p.z) * canvas.width * 0.5;
        const y = cy + (p.y / p.z) * canvas.height * 0.5;
        const size = (1 - p.z) * 2;
        
        ctx.strokeStyle = p.color;
        ctx.lineWidth = size;
        ctx.beginPath();
        ctx.moveTo(x, y);
        const prevX = cx + (p.x / (p.z + 0.015)) * canvas.width * 0.5;
        const prevY = cy + (p.y / (p.z + 0.015)) * canvas.height * 0.5;
        ctx.lineTo(prevX, prevY);
        ctx.stroke();
    });
    requestAnimationFrame(animate);
}
animate();

// --- MOTOR DE SEQUÊNCIA DAS CENAS (Hiperspaço MyServ) ---
// ... (mantenha o código do canvas e animação que já funciona) ...

let indexCena = 0;
const todasCenas = document.querySelectorAll('.cena');

function alternarCenas() {
    // 1. Quem está ativa agora, começa a sair
    const ativaAnterior = document.querySelector('.cena.ativa');
    if (ativaAnterior) {
        ativaAnterior.classList.remove('ativa');
        ativaAnterior.classList.add('saindo');
        
        // 2. Após a animação de saída (1.5s), removemos a classe saindo 
        // para ela "teletransportar" de volta ao fundo silenciosamente
        setTimeout(() => {
            ativaAnterior.classList.remove('saindo');
        }, 2000);
    }

    // 3. Ativa a próxima cena que já deve estar esperando no fundo
    todasCenas[indexCena].classList.add('ativa');

    // 4. Ciclo infinito
    indexCena = (indexCena + 1) % todasCenas.length;
}

// Inicia o motor
setInterval(alternarCenas, 5000); // 5 segundos por cena
alternarCenas();