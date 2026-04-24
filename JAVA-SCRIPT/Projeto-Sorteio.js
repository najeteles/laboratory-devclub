function gerarSorteio() {
    const min = Math.ceil(document.getElementById("min-val").value);
    const max = Math.floor(document.getElementById("max-val").value);

    if (min >= max) {
        alert("Atenção: O valor máximo deve ser estritamente maior que o mínimo.");
        return;
    }

    const resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    
    const display = document.getElementById("display-resultado");
    display.innerText = resultado;
    
    // Animação simples de pulso no resultado
    display.style.transform = "scale(1.2)";
    setTimeout(() => { display.style.transform = "scale(1)"; }, 200);
}